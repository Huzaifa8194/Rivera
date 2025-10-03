import { NextResponse } from "next/server";
import { hotelInfoDump } from "../client";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { inventory = "all", language = "en" } = body || {};
    const payload = { inventory, language };
    console.log("[API] /api/ratehawk/dump payload:", payload);
    const resp = await hotelInfoDump(payload);
    console.log("[API] dump response:", resp);
    const url = resp?.data?.url || resp?.url || null;
    const last_update = resp?.data?.last_update || resp?.last_update || null;
    return NextResponse.json({ url, last_update, raw: resp }, { status: 200 });
  } catch (err) {
    console.error("[API] /api/ratehawk/dump error:", err);
    const status = err?.status || 500;
    return NextResponse.json({ error: err?.message || "Unexpected error", details: err?.data }, { status });
  }
}


