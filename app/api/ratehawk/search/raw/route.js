import { NextResponse } from "next/server";
import { searchSerpRegion, searchSerpHotels, searchSerpGeo, searchMulticomplete } from "../../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    console.log("[API RAW] /api/ratehawk/search/raw body:", body);

    const {
      mode = "hotels", // "hotels" | "region" | "geo"
      checkin,
      checkout,
      residency,
      language = "en",
      currency = "EUR",
      guests,
      ids,
      hids,
      region_id,
      region_query,
      longitude,
      latitude,
      radius,
    } = body || {};

    let serpData = null;
    if (mode === "hotels") {
      const payload = { checkin, checkout, residency, language, guests, currency };
      if (Array.isArray(hids) && hids.length > 0) payload.hids = hids;
      if (Array.isArray(ids) && ids.length > 0) payload.ids = ids;
      console.log("[API RAW] SERP hotels payload:", payload);
      serpData = await searchSerpHotels(payload);
    } else if (mode === "region") {
      let resolvedRegionId = region_id;
      if (!resolvedRegionId && region_query) {
        const suggest = await searchMulticomplete({ query: String(region_query).trim(), language, limit: 10 });
        const regions = Array.isArray(suggest?.regions) ? suggest.regions : (suggest?.data?.regions || []);
        resolvedRegionId = regions?.[0]?.id || regions?.[0]?.region_id || null;
        console.log("[API RAW] Resolved region:", { resolvedRegionId });
      }
      const payload = { checkin, checkout, residency, language, guests, currency, region_id: resolvedRegionId };
      console.log("[API RAW] SERP region payload:", payload);
      serpData = await searchSerpRegion(payload);
    } else if (mode === "geo") {
      const payload = { checkin, checkout, residency, language, guests, currency, longitude, latitude, radius };
      console.log("[API RAW] SERP geo payload:", payload);
      serpData = await searchSerpGeo(payload);
    } else {
      return NextResponse.json({ error: "invalid mode" }, { status: 400 });
    }

    console.log("[API RAW] Returning raw response");
    // Return ETG response unmodified
    return NextResponse.json(serpData, { status: 200 });
  } catch (err) {
    console.error("[API RAW] /api/ratehawk/search/raw error:", err);
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


