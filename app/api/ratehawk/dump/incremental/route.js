import { NextResponse } from "next/server";
import { hotelInfoIncrementalDump } from "../../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { language = "en" } = body || {};
    const payload = { language };
    console.log("[API] /api/ratehawk/dump/incremental payload:", payload);
    const resp = await hotelInfoIncrementalDump(payload);
    console.log("[API] incremental dump response:", resp);
    const url = resp?.data?.url || resp?.url || null;
    const last_update = resp?.data?.last_update || resp?.last_update || null;
    const error = resp?.error || null;
    return NextResponse.json({ url, last_update, raw: resp, error }, { status: 200 });
  } catch (err) {
    console.error("[API] /api/ratehawk/dump/incremental error:", err);
    const status = err?.status || 500;
    return NextResponse.json({ error: err?.message || "Unexpected error", details: err?.data }, { status });
  }
}


