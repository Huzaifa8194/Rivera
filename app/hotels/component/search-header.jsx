"use client"

import { Button, TextField, Box, Typography, Grid, Container, Paper, List, ListItemButton, ListItemText } from "@mui/material"
import { Calendar, MapPin, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SearchHeader({ onRequestChange }) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState({ hotels: [], regions: [] })
  const [open, setOpen] = useState(false)
  const abortRef = useRef(null)

  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) {
      setSuggestions({ hotels: [], regions: [] })
      setOpen(false)
      return
    }
    ;(async () => {
      try {
        if (abortRef.current) abortRef.current.abort()
        abortRef.current = new AbortController()
        const res = await fetch("/api/ratehawk/suggest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: q, language: "en" }),
          signal: abortRef.current.signal,
        })
        const data = await res.json().catch(() => null)
        if (!res.ok) throw new Error(data?.error || "suggest failed")
        console.log("[Suggest] Received:", { hotels: (data?.hotels || []).length, regions: (data?.regions || []).length })
        setSuggestions({ hotels: data.hotels || [], regions: data.regions || [] })
        setOpen(true)
      } catch (e) {
        if (e.name !== "AbortError") console.warn("suggest error", e)
      }
    })()
  }, [query])

  function onPickRegion(region) {
    // Emit a custom event for parent pages or store (temporary integration)
    console.log("[Suggest] Picked region:", region)
    setQuery(region?.name || "")
    setOpen(false)
    if (region?.region_id || region?.id) {
      onRequestChange?.({
        mode: "region",
        checkin: "2025-10-01",
        checkout: "2025-10-07",
        residency: "GB",
        language: "en",
        guests: [{ adults: 2, children: [] }],
        region_id: region?.region_id || region?.id,
        currency: "EUR",
      })
    }
  }

  return (
    <Box sx={{ 
      bgcolor: '#1e293b', 
      color: 'white', 
      p: { xs: 2, md: 3 },
      mt: { xs: 8, md: 10 }
    }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: { xs: 2, md: 3 }, fontWeight: 500 }}>
          Your best stay is one search away...
        </Typography>

        <Grid container spacing={2} alignItems="flex-end">
          {/* Location */}
          <Grid item xs={12} sm={6} lg={2} xl={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Location</Typography>
            <Box sx={{ position: 'relative' }}>
              <MapPin style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city or hotel name"
                InputProps={{
                  sx: { pl: 5, bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
                }}
              />
              {open && (suggestions.hotels.length > 0 || suggestions.regions.length > 0) && (
                <Paper elevation={4} sx={{ position: 'absolute', left: 0, right: 0, top: 54, zIndex: 10, maxHeight: 280, overflowY: 'auto' }}>
                  <List dense>
                    {suggestions.regions.slice(0, 5).map((r) => (
                      <ListItemButton key={`reg-${r.id || r.region_id}`} onClick={() => onPickRegion(r)}>
                        <ListItemText primary={r.name} secondary={r.country_name || r.country || r.country_iso2} />
                      </ListItemButton>
                    ))}
                    {suggestions.hotels.slice(0, 5).map((h) => (
                      <ListItemButton key={`hot-${h.id || h.hotel_id}`} onClick={() => onPickRegion(h)}>
                        <ListItemText primary={h.name} secondary={h.city || h.country || h.address} />
                      </ListItemButton>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>
          </Grid>

          {/* Check-in */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Check-in</Typography>
            <Box sx={{ position: 'relative' }}>
              <Calendar style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value="01/07/2026"
                InputProps={{
                  readOnly: true,
                  sx: { pl: 5, bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
                }}
              />
            </Box>
          </Grid>

          {/* Check-out */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Check-out</Typography>
            <Box sx={{ position: 'relative' }}>
              <Calendar style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value="08/07/2026"
                InputProps={{
                  readOnly: true,
                  sx: { pl: 5, bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
                }}
              />
            </Box>
          </Grid>

          {/* Rooms */}
          <Grid item xs={12} sm={6} lg={2} xl={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Rooms</Typography>
            <TextField
              fullWidth
              value="1 Room"
              InputProps={{
                readOnly: true,
                sx: { bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
              }}
            />
          </Grid>

          {/* Guests */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Guests</Typography>
            <Box sx={{ position: 'relative' }}>
              <Users style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value="2 Adults"
                InputProps={{
                  readOnly: true,
                  sx: { pl: 5, bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
                }}
              />
            </Box>
          </Grid>

          {/* Search Button */}
          <Grid item xs={6} sm={3} lg={1}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#f97316',
                color: 'white',
                px: 4,
                height: 48,
                fontWeight: 500,
                '&:hover': { bgcolor: '#ea580c' }
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


