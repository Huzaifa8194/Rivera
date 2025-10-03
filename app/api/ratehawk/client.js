// Centralized Ratehawk/ETG API client with verbose logging and basic retry
// Uses environment variables:
// - RATEHAWK_BASE_URL (e.g., https://api.worldota.net/)
// - RATEHAWK_API_KEY (password part)
// - RATEHAWK_KEY_ID or RATEHAWK_PARTNER_ID (username part)

const DEFAULT_TIMEOUT_MS = 20000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function rhFetch(endpoint, options = {}) {
  const baseUrl = process.env.RATEHAWK_BASE_URL || process.env.RATEHAWK_API_URL || "";
  if (!baseUrl) {
    console.error("[Ratehawk] Missing RATEHAWK_BASE_URL env");
    throw new Error("Server misconfiguration: RATEHAWK_BASE_URL missing");
  }

  const url = new URL(endpoint.replace(/^\//, ""), baseUrl).toString();
  try {
    const parsed = new URL(url);
    console.log("[Ratehawk] Using base host:", parsed.origin);
  } catch (_) {}
  const method = (options.method || "POST").toUpperCase();

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(options.headers || {}),
  };

  // HTTP Basic Auth per ETG docs: username = KEY_ID (or PARTNER_ID), password = API_KEY
  const apiKey = process.env.RATEHAWK_API_KEY;
  const username = process.env.RATEHAWK_KEY_ID || process.env.RATEHAWK_PARTNER_ID;
  if (apiKey && username) {
    const token = Buffer.from(`${username}:${apiKey}`).toString("base64");
    headers["Authorization"] = `Basic ${token}`;
    console.log("[Ratehawk] Using HTTP Basic auth (username present)");
  } else if (apiKey) {
    // Fallback for older setups (not recommended)
    headers["Authorization"] = headers["Authorization"] || `Bearer ${apiKey}`;
    headers["Api-Key"] = headers["Api-Key"] || apiKey;
    headers["X-API-Key"] = headers["X-API-Key"] || apiKey;
    console.warn("[Ratehawk] Falling back to Bearer/API-Key headers (no username env set)");
  } else {
    console.warn("[Ratehawk] No API key configured in env – requests will fail");
  }

  // Prepare request body and URL for GET vs POST per ETG docs
  let body = undefined;
  let finalUrl = url;
  if (options.method && options.method.toUpperCase() === "GET") {
    if (options.body) {
      // For GET, ETG expects ?data=<JSON-string>
      const dataStr = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
      const u = new URL(url);
      u.searchParams.set("data", dataStr);
      finalUrl = u.toString();
    }
  } else {
    body = options.body ? (typeof options.body === "string" ? options.body : JSON.stringify(options.body)) : undefined;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || DEFAULT_TIMEOUT_MS);

  const attemptFetch = async (attempt) => {
    const startedAt = Date.now();
    console.log(`[Ratehawk] >>> ${method} ${finalUrl} (attempt ${attempt})`);
    if (body) {
      try {
        console.log("[Ratehawk] Request body:", typeof body === "string" ? JSON.parse(body) : body);
      } catch (_) {
        console.log("[Ratehawk] Request body (raw string)");
      }
    }

    try {
      const res = await fetch(finalUrl, {
        method,
        headers,
        body,
        signal: controller.signal,
        // do not cache sandbox calls
        cache: "no-store",
      });

      const elapsed = Date.now() - startedAt;
      const contentType = res.headers.get("content-type") || "";

      let data;
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }

      // Log rate limit headers when present
      const rlSeconds = res.headers.get("X-RateLimit-SecondsNumber");
      const rlReq = res.headers.get("X-RateLimit-RequestsNumber");
      const rlRemain = res.headers.get("X-RateLimit-Remaining");
      const rlReset = res.headers.get("X-RateLimit-Reset");
      console.log(`[Ratehawk] <<< ${res.status} in ${elapsed}ms from ${finalUrl}`);
      if (rlReq || rlSeconds) {
        console.log("[Ratehawk] RateLimit:", { rlSeconds, rlReq, rlRemain, rlReset });
      }

      if (!res.ok) {
        // Retry on 429/5xx
        if ((res.status === 429 || res.status >= 500) && attempt < (options.retries ?? 2)) {
          const backoff = (options.backoffBaseMs ?? 600) * attempt;
          console.warn(`[Ratehawk] Status ${res.status}, retrying after ${backoff}ms`);
          await sleep(backoff);
          return attemptFetch(attempt + 1);
        }
        console.error("[Ratehawk] Error response:", data);
        const err = new Error(`Ratehawk error ${res.status}`);
        err.status = res.status;
        err.data = data;
        err.url = finalUrl;
        throw err;
      }

      return data;
    } catch (err) {
      if (err.name === "AbortError") {
        console.error("[Ratehawk] Request timed out");
        const e = new Error("Ratehawk request timed out");
        e.kind = "timeout";
        e.url = finalUrl;
        throw e;
      }
      if (attempt < (options.retries ?? 2)) {
        const backoff = (options.backoffBaseMs ?? 600) * attempt;
        console.warn(`[Ratehawk] Network error, retrying after ${backoff}ms`, err);
        await sleep(backoff);
        return attemptFetch(attempt + 1);
      }
      console.error("[Ratehawk] Request failed:", err);
      const e = new Error(err?.message || "Ratehawk fetch failed");
      e.kind = err?.kind || "network";
      e.url = finalUrl;
      throw e;
    }
  };

  try {
    return await attemptFetch(1);
  } finally {
    clearTimeout(timeout);
  }
}

export async function searchMulticomplete(payload) {
  return rhFetch("/api/b2b/v3/search/multicomplete/", { method: "POST", body: payload });
}

export async function searchSerpRegion(payload) {
  return rhFetch("/api/b2b/v3/search/serp/region/", { method: "POST", body: payload });
}

export async function searchSerpHotels(payload) {
  return rhFetch("/api/b2b/v3/search/serp/hotels/", { method: "POST", body: payload });
}

export async function searchSerpGeo(payload) {
  return rhFetch("/api/b2b/v3/search/serp/geo/", { method: "POST", body: payload });
}

export async function hotelInfoDump(payload) {
  return rhFetch("/api/b2b/v3/hotel/info/dump/", { method: "POST", body: payload });
}


