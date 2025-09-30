import { NextResponse } from "next/server";
import { rhFetch } from "../client";

export async function GET() {
  const host = process.env.RATEHAWK_BASE_URL || process.env.RATEHAWK_API_URL || null;
  try {
    const started = Date.now();
    const data = await rhFetch("/api/b2b/v3/overview/", { method: "POST", body: {} });
    const ms = Date.now() - started;
    return NextResponse.json({ ok: true, ms, host, sample: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, host, error: err?.message, kind: err?.kind, url: err?.url, details: err?.data }, { status: err?.status || 500 });
  }
}


