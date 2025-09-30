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
        let res = await fetch("/api/ratehawk/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
          cache: "no-store",
        })
        console.log("[Hotels] Response status:", res.status)
        let data = await res.json().catch(() => null)
        console.log("[Hotels] Response data:", data)

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
          res = await fetch("/api/ratehawk/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fallbackBody),
            cache: "no-store",
          })
          console.log("[Hotels] Fallback status:", res.status)
          data = await res.json().catch(() => null)
          console.log("[Hotels] Fallback data:", data)
        }

        if (!res.ok) throw new Error(data?.error || "Failed to fetch search results")
        const nextItems = Array.isArray(data?.results) ? data.results : []
        console.log("[Hotels] Items count:", nextItems.length, "meta:", data?.meta)
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ color: '#495560' }}>Sort By:</Typography>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select value={sort} onChange={(e) => setSort(e.target.value)} sx={{ height: 40 }}>
              <MenuItem value="price_asc">Lowest Price</MenuItem>
              <MenuItem value="rating_desc">Highest Rating</MenuItem>
              <MenuItem value="popularity">Most Popular</MenuItem>
            </Select>
          </FormControl>
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


