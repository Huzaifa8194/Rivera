import { NextResponse } from "next/server";
import { searchMulticomplete } from "../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { query, language = "en" } = body || {};
    console.log("[API] /api/ratehawk/suggest body:", body);
    if (!query || String(query).trim().length < 2) {
      return NextResponse.json({ error: "query required (min 2 chars)" }, { status: 400 });
    }
    const payload = { query: String(query).trim(), language };
    console.log("[API] suggest payload:", payload);
    const data = await searchMulticomplete(payload);
    console.log("[API] suggest result keys:", Object.keys(data || {}));
    return NextResponse.json({ hotels: data?.hotels || [], regions: data?.regions || [], raw: data }, { status: 200 });
  } catch (err) {
    console.error("[API] /api/ratehawk/suggest error:", err);
    const status = err?.status || 500;
    return NextResponse.json({ error: err?.message || "Unexpected error", details: err?.data }, { status });
  }
}


