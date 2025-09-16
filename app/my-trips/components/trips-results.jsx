"use client"

import { Box, Card, Typography, Button, Chip } from "@mui/material"
import Link from "next/link"
import { Heart, Bed, Plane } from "lucide-react"

const items = [1,2,3,4]

function TripCard() {
  return (
    <Card component={Link} href="/my-trips/1" sx={{ overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { xs: '100%', md: 288 }, height: 192, position: 'relative', overflow: 'hidden' }}>
          <img src="/home/home-landing.jpg" alt="trip" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </Box>

        <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#002640' }}>
                Turquoise Resort Chogogo Dive & Beach Curacao
              </Typography>
              <Typography variant="caption" sx={{ color: '#495560' }}>
                Turkey &gt; Turkes Reviera &gt; Side • <span style={{ textDecoration: 'underline', color: '#003a64' }}>View on Map</span>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button variant="text" size="small" sx={{ minWidth: 'auto', p: 0.5 }}>
                <Heart size={16} />
              </Button>
              <Chip label="8.9 / 10" sx={{ bgcolor: '#0f172a', color: 'white', fontWeight: 600 }} />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', mt: 1.5, gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ bgcolor: '#003a64', color: 'white', p: 2, borderRadius: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2">Thu Aug 28, 2025</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>9 Days, 7 Nights</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1.5 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>From</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Amsterdam</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Bed size={16} />
                    <Typography variant="body2">Lodging</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Plane size={16} />
                    <Typography variant="body2">Transfer</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ textAlign: { xs: 'left', lg: 'right' }, minWidth: 128 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#002640' }}>
                €349
              </Typography>
              <Typography variant="caption" sx={{ color: '#6B7280' }}>per person</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export function TripsResults() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((i) => (
          <TripCard key={i} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>‹</Button>
        <Button variant="contained" size="small" sx={{ minWidth: 32, height: 32 }}>1</Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>2</Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>›</Button>
      </Box>
    </Box>
  )
}


