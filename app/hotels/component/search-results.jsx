"use client"

import { 
  Card, 
  Button, 
  Box, 
  Typography, 
  Grid, 
  Chip,
  Select,
  MenuItem,
  FormControl
} from "@mui/material"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Heart, Bed } from "lucide-react"

export function SearchResults({ request }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  const [sort, setSort] = useState("price_asc")
  const [rawJson, setRawJson] = useState(null)

  // Compute effective request: prefer parent-provided request, else default region
  const requestBody = useMemo(() => {
    const base = request && typeof request === 'object' ? request : {
      mode: "region",
      checkin: "2025-10-01",
      checkout: "2025-10-07",
      residency: "GB",
      language: "en",
      guests: [{ adults: 2, children: [] }],
      region_id: 965849721,
      currency: "EUR",
    }
    // merge sort if applicable (only for future use)
    return { ...base, sort }
  }, [request, sort])

  useEffect(() => {
    let cancelled = false
    async function run() {
      console.log("[Hotels] Fetching SERP with body:", requestBody)
      setLoading(true)
      setError(null)
      try {
        let res = await fetch("/api/ratehawk/search/raw", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
          cache: "no-store",
        })
        console.log("[Hotels] Response status:", res.status)
        let data = await res.json().catch(() => null)
        console.log("[Hotels] Response data:", data)
        setRawJson(data)

        // Fallback for sandbox: if 400, retry with the test hotel only, per docs
        if (!res.ok && res.status === 400) {
          console.warn("[Hotels] 400 from SERP. Retrying with sandbox test hotel…")
          const fallbackBody = {
            mode: "hotels",
            checkin: "2025-10-22",
            checkout: "2025-10-25",
            residency: "gb",
            language: "en",
            guests: [{ adults: 2, children: [] }],
            ids: ["test_hotel_do_not_book"],
            hids: [8473727],
            currency: "EUR",
          }
          console.log("[Hotels] Fallback body:", fallbackBody)
          res = await fetch("/api/ratehawk/search/raw", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fallbackBody),
            cache: "no-store",
          })
          console.log("[Hotels] Fallback status:", res.status)
          data = await res.json().catch(() => null)
          console.log("[Hotels] Fallback data:", data)
          setRawJson(data)
        }

        if (!res.ok) throw new Error(data?.error || "Failed to fetch search results")
        // Map RAW data -> UI items
        const hotelsArr = (data?.data?.hotels || data?.hotels || [])
        console.log('[Hotels] RAW hotels count:', hotelsArr.length)

        function pickBestRate(rates) {
          if (!Array.isArray(rates)) return null
          let best = null
          for (const r of rates) {
            const types = Array.isArray(r?.payment_options?.payment_types) ? r.payment_options.payment_types : []
            for (const t of types) {
              const show = t?.show_amount != null ? parseFloat(t.show_amount) : null
              const amount = t?.amount != null ? parseFloat(t.amount) : null
              const val = Number.isFinite(show) ? show : (Number.isFinite(amount) ? amount : null)
              if (val != null) {
                if (!best || val < best.price) {
                  best = {
                    price: val,
                    currency: t?.show_currency_code || t?.currency_code || 'EUR',
                    meal: r?.meal_data?.value || r?.meal || null,
                    hasBreakfast: !!r?.meal_data?.has_breakfast,
                    freeCancelBefore: r?.cancellation_penalties?.free_cancellation_before || null,
                    roomName: r?.room_name || r?.room_name_info?.original_rate_name || null,
                  }
                }
              }
            }
            if (!best && Array.isArray(r?.daily_prices) && r.daily_prices.length > 0) {
              const sum = r.daily_prices.reduce((acc, v) => acc + (parseFloat(v) || 0), 0)
              if (sum > 0) {
                best = {
                  price: sum,
                  currency: data?.currency || requestBody?.currency || 'EUR',
                  meal: r?.meal_data?.value || r?.meal || null,
                  hasBreakfast: !!r?.meal_data?.has_breakfast,
                  freeCancelBefore: r?.cancellation_penalties?.free_cancellation_before || null,
                  roomName: r?.room_name || r?.room_name_info?.original_rate_name || null,
                }
              }
            }
          }
          return best
        }

        const nextItems = hotelsArr.map((h) => {
          const best = pickBestRate(h?.rates)
          return {
            id: h?.id || h?.hid,
            name: h?.name || h?.id,
            price: best?.price ?? null,
            currency: best?.currency || 'EUR',
            roomName: best?.roomName || null,
            hasBreakfast: best?.hasBreakfast || false,
            freeCancelBefore: best?.freeCancelBefore || null,
            image: '/home/home-landing.jpg',
          }
        })
        console.log("[Hotels] Mapped items count:", nextItems.length)
        if (!cancelled) setItems(nextItems)
      } catch (err) {
        console.error("[Hotels] SERP error:", err)
        if (!cancelled) setError(err?.message || "Unexpected error")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => { cancelled = true }
  }, [requestBody])

  return (
    <Box sx={{ flex: 1 }}>
      {/* Results Header */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { sm: 'center' }, 
        gap: 2, 
        mb: 3 
      }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#002640' }}>Search Results</Typography>
          <Typography variant="body2" sx={{ color: '#495560' }}>
            {loading ? "Loading..." : `${items.length} results found`}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: '#495560' }}>Sort By:</Typography>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select value={sort} onChange={(e) => setSort(e.target.value)} sx={{ height: 40 }}>
              <MenuItem value="price_asc">Lowest Price</MenuItem>
              <MenuItem value="rating_desc">Highest Rating</MenuItem>
              <MenuItem value="popularity">Most Popular</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" size="small" onClick={async () => {
            try {
              console.log('[Dump] Requesting hotel info dump...')
              const res = await fetch('/api/ratehawk/dump', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inventory: 'all', language: 'en' }),
                cache: 'no-store',
              })
              const data = await res.json().catch(() => null)
              console.log('[Dump] Response status:', res.status)
              console.log('[Dump] Response data:', data)
              if (!res.ok) throw new Error(data?.error || 'dump failed')
              // Render nicely below header
              setRawJson((prev) => ({ ...(prev || {}), _dump: { url: data?.url, last_update: data?.last_update } }))
            } catch (e) {
              console.warn('[Dump] error', e)
              setRawJson((prev) => ({ ...(prev || {}), _dump: { error: e?.message || 'Dump request failed' } }))
            }
          }}>Request Dump</Button>
          <Button variant="outlined" size="small" onClick={async () => {
            try {
              console.log('[Dump] Requesting incremental dump...')
              const res = await fetch('/api/ratehawk/dump/incremental', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ language: 'en' }),
                cache: 'no-store',
              })
              const data = await res.json().catch(() => null)
              console.log('[Dump] Incremental status:', res.status)
              console.log('[Dump] Incremental data:', data)
              if (!res.ok) throw new Error(data?.error || 'incremental dump failed')
              setRawJson((prev) => ({ ...(prev || {}), _incremental_dump: { url: data?.url, last_update: data?.last_update, error: data?.error || null } }))
            } catch (e) {
              console.warn('[Dump] Incremental error', e)
              setRawJson((prev) => ({ ...(prev || {}), _incremental_dump: { error: e?.message || 'Incremental dump request failed' } }))
            }
          }}>Request Incremental Dump</Button>
          <Button variant="outlined" size="small" onClick={async () => {
            try {
              console.log('[Hotels RAW] Calling /api/ratehawk/search/raw with body:', requestBody)
              const res = await fetch('/api/ratehawk/search/raw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
                cache: 'no-store',
              })
              const data = await res.json().catch(() => null)
              console.log('[Hotels RAW] Response status:', res.status)
              console.log('[Hotels RAW] Response data:', data)
              setRawJson(data)
            } catch (e) {
              console.warn('[Hotels RAW] error', e)
            }
          }}>Debug: Log Raw</Button>
        </Box>
      </Box>

      {/* Results List */}
      {error && (
        <Box sx={{ mb: 2, p: 2, bgcolor: '#fee2e2', color: '#991b1b', borderRadius: 1 }}>
          <Typography variant="body2">{error}</Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((hotel) => (
          <Card key={hotel.id} component={Link} href={`/vacations/1`} sx={{ overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Image */}
              <Box sx={{ width: { xs: '100%', md: 288 }, height: 192, position: 'relative', overflow: 'hidden' }}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', lg: 'row' }, 
                  justifyContent: 'space-between', 
                  alignItems: { lg: 'flex-start' }, 
                  gap: 2 
                }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#002640' }}>
                        {hotel.name}
                      </Typography>
                      <Button variant="text" size="small" sx={{ p: 0.5, minWidth: 'auto' }}>
                        <Heart size={16} />
                      </Button>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#495560', mb: 2 }}>
                      {hotel.location}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Chip 
                        label={`${hotel.rating ?? "-"}/10`} 
                        sx={{ 
                          bgcolor: '#1976d2', 
                          color: 'white', 
                          fontWeight: 500 
                        }} 
                      />
                    </Box>

                    {/* Stay Details */}
                    <Box sx={{ 
                      bgcolor: '#003a64', 
                      color: 'white', 
                      p: { xs: 2, md: 2.5 }, 
                      borderRadius: 1 
                    }}>
                      <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            1 - 8 Jul 2026
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            1 Room · 2 Guests
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            Free cancellation
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Bed size={16} />
                          <Typography variant="body2">Breakfast included</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Price */}
                  <Box sx={{ 
                    textAlign: { xs: 'center', lg: 'right' }, 
                    ml: { lg: 3 } 
                  }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002640' }}>
                      {hotel.currency ? `${hotel.currency} ` : ""}{hotel.price ?? "-"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6B7280' }}>
                      per night
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {rawJson && (
        <Box sx={{ mt: 3, p: 2, bgcolor: '#f1f5f9', borderRadius: 1 }}>
          <Typography variant="body2" sx={{ mb: 1, color: '#0f172a' }}>Raw response (truncated):</Typography>
          {rawJson?._dump && (
            <Box sx={{ mb: 2, p: 2, bgcolor: '#ecfeff', border: '1px solid #a5f3fc', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ color: '#155e75', mb: 1 }}>Hotel Info Dump</Typography>
              {rawJson._dump.error ? (
                <Typography variant="body2" sx={{ color: '#b91c1c' }}>{rawJson._dump.error}</Typography>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                    <Typography variant="body2" sx={{ color: '#0f172a' }}>URL:</Typography>
                    <a href={rawJson._dump.url || '#'} target="_blank" rel="noreferrer" style={{ color: '#0369a1', wordBreak: 'break-all' }}>
                      {rawJson._dump.url || '-'}
                    </a>
                    <Button size="small" variant="outlined" onClick={() => {
                      if (rawJson?._dump?.url) navigator.clipboard?.writeText(rawJson._dump.url)
                    }}>Copy URL</Button>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Typography variant="body2" sx={{ color: '#0f172a' }}>Last Update:</Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>{rawJson._dump.last_update || '-'}</Typography>
                  </Box>
                </>
              )}
            </Box>
          )}
          {rawJson?._incremental_dump && (
            <Box sx={{ mb: 2, p: 2, bgcolor: '#fefce8', border: '1px solid #fde68a', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ color: '#713f12', mb: 1 }}>Incremental Dump</Typography>
              {rawJson._incremental_dump.error ? (
                <Typography variant="body2" sx={{ color: '#b91c1c' }}>{rawJson._incremental_dump.error}</Typography>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                    <Typography variant="body2" sx={{ color: '#0f172a' }}>URL:</Typography>
                    <a href={rawJson._incremental_dump.url || '#'} target="_blank" rel="noreferrer" style={{ color: '#ca8a04', wordBreak: 'break-all' }}>
                      {rawJson._incremental_dump.url || '-'}
                    </a>
                    <Button size="small" variant="outlined" onClick={() => {
                      if (rawJson?._incremental_dump?.url) navigator.clipboard?.writeText(rawJson._incremental_dump.url)
                    }}>Copy URL</Button>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Typography variant="body2" sx={{ color: '#0f172a' }}>Last Update:</Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>{rawJson._incremental_dump.last_update || '-'}</Typography>
                  </Box>
                </>
              )}
            </Box>
          )}
          <pre style={{ maxHeight: 240, overflow: 'auto', margin: 0 }}>
{JSON.stringify(rawJson, null, 2)}
          </pre>
        </Box>
      )}

      {/* Pagination */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 1, 
        mt: 4 
      }}>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          ‹
        </Button>
        <Button variant="contained" size="small" sx={{ minWidth: 32, height: 32 }}>
          1
        </Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          2
        </Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          ›
        </Button>
      </Box>
    </Box>
  )
}


