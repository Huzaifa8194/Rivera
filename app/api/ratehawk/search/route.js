import { NextResponse } from "next/server";
import { searchSerpRegion, searchSerpHotels, searchSerpGeo } from "../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    console.log("[API] /api/ratehawk/search POST body:", body);

    const {
      mode = "hotels", // "hotels" | "region" | "geo"
      checkin = "2025-10-22",
      checkout = "2025-10-25",
      residency = "gb",
      language = "en",
      currency = "EUR",
      guests = [{ adults: 2, children: [] }],
      ids = undefined, // [String]
      hids = undefined, // [Int]
      region_id = undefined, // Int
      longitude = undefined, // Number
      latitude = undefined, // Number
      radius = undefined, // Number (km)
    } = body || {};

    let serpData = null;
    if (mode === "hotels") {
      if ((!ids || ids.length === 0) && (!hids || hids.length === 0)) {
        return NextResponse.json({ error: "ids or hids required for hotels mode" }, { status: 400 });
      }
      const payload = { checkin, checkout, residency, language, guests, currency };
      if (ids) payload.ids = ids;
      if (hids) payload.hids = hids;
      console.log("[API] SERP hotels payload:", payload);
      serpData = await searchSerpHotels(payload);
    } else if (mode === "region") {
      if (!region_id) {
        return NextResponse.json({ error: "region_id required for region mode" }, { status: 400 });
      }
      const payload = { checkin, checkout, residency, language, guests, currency, region_id };
      console.log("[API] SERP region payload:", payload);
      serpData = await searchSerpRegion(payload);
    } else if (mode === "geo") {
      if (longitude == null || latitude == null || radius == null) {
        return NextResponse.json({ error: "longitude, latitude, radius required for geo mode" }, { status: 400 });
      }
      const payload = { checkin, checkout, residency, language, guests, currency, longitude, latitude, radius };
      console.log("[API] SERP geo payload:", payload);
      serpData = await searchSerpGeo(payload);
    } else {
      return NextResponse.json({ error: "invalid mode" }, { status: 400 });
    }

    // Normalize a minimal response for UI
    const items = Array.isArray(serpData) ? serpData : (serpData?.results || serpData?.hotels || []);
    const results = items.map((h) => ({
      id: h.id || h.hotel_id || h.hotelId,
      name: h.name || h.hotel_name || h.title,
      rating: h.rating || h.stars || h.score || null,
      price: h.price?.amount || h.min_price || h.price || null,
      currency: h.price?.currency || serpData?.currency || currency || "EUR",
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


