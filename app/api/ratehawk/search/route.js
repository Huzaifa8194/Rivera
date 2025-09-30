import { NextResponse } from "next/server";
import { searchMulticomplete, searchSerpRegion, searchSerpHotels } from "../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    console.log("[API] /api/ratehawk/search POST body:", body);

    const {
      query = "Paris",
      checkIn = "2026-07-01",
      checkOut = "2026-07-08",
      rooms = [{ adults: 2 }],
      sort = "price_asc",
      page = 1,
      perPage = 20,
      regionFallback = true,
    } = body || {};

    // Step 1: multicomplete to find region/hotel ids from query
    const suggestPayload = { query, limit: 5 };
    const suggest = await searchMulticomplete(suggestPayload);
    console.log("[API] multicomplete result:", suggest);

    // pick first region if available, else try hotels list
    const regionItem = suggest?.regions?.[0];
    const hotelItem = suggest?.hotels?.[0];

    let serpData = null;
    if (regionItem && regionFallback) {
      const regionPayload = {
        region_id: regionItem?.id || regionItem?.region_id || regionItem?.regionId,
        checkin: checkIn,
        checkout: checkOut,
        rooms,
        sort,
        page,
        per_page: perPage,
      };
      console.log("[API] Calling SERP region with:", regionPayload);
      serpData = await searchSerpRegion(regionPayload);
    } else if (hotelItem) {
      const hotelsPayload = {
        hotel_ids: [hotelItem?.id || hotelItem?.hotel_id || hotelItem?.hotelId].filter(Boolean),
        checkin: checkIn,
        checkout: checkOut,
        rooms,
        sort,
        page,
        per_page: perPage,
      };
      console.log("[API] Calling SERP hotels with:", hotelsPayload);
      serpData = await searchSerpHotels(hotelsPayload);
    } else {
      return NextResponse.json({ results: [], meta: { page: 1, total: 0 }, source: "empty" }, { status: 200 });
    }

    // Normalize a minimal response for UI
    const results = (serpData?.results || serpData?.hotels || []).map((h) => ({
      id: h.id || h.hotel_id || h.hotelId,
      name: h.name || h.hotel_name || h.title,
      rating: h.rating || h.stars || h.score || null,
      price: h.price?.amount || h.min_price || h.price || null,
      currency: h.price?.currency || serpData?.currency || "EUR",
      image: h.main_photo || h.image || "/home/home-landing.jpg",
      location: h.location?.name || h.address || "",
    }));

    const meta = {
      page: serpData?.page || page,
      total: serpData?.total || results.length,
    };

    console.log(`[API] Returning ${results.length} results`);
    return NextResponse.json({ results, meta }, { status: 200 });
  } catch (err) {
    console.error("[API] /api/ratehawk/search error:", err);
    const status = err?.status || 500;
    return NextResponse.json({ 
      error: err?.message || "Unexpected error", 
      details: err?.data, 
      kind: err?.kind,
      url: err?.url,
      envHost: process.env.RATEHAWK_BASE_URL || process.env.RATEHAWK_API_URL || null
    }, { status });
  }
}


