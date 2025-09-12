import { Button, TextField, Box, Typography, Grid, Container } from "@mui/material"
import { Calendar, MapPin, Users } from "lucide-react"

export function SearchHeader() {
  return (
    <Box sx={{ 
      bgcolor: '#1e293b', 
      color: 'white', 
      p: { xs: 2, md: 3 },
      mt: { xs: 8, md: 10 } // Add top margin to account for fixed positioned navbar
    }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: { xs: 2, md: 3 }, fontWeight: 500 }}>
          Your best trip is one search away...
        </Typography>

        <Grid container spacing={2} alignItems="flex-end">
          {/* Location */}
          <Grid item xs={12} sm={6} lg={2} xl={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Location</Typography>
            <Box sx={{ position: 'relative' }}>
              <MapPin style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value="Paris, France 🇫🇷"
                InputProps={{
                  readOnly: true,
                  sx: { pl: 5, bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
                }}
              />
            </Box>
          </Grid>

          {/* Departure Date */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>From</Typography>
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

          {/* Return Date */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Until date</Typography>
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

          {/* Departure Airport */}
          <Grid item xs={12} sm={6} lg={2} xl={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Departure Airport</Typography>
            <TextField
              fullWidth
              value="Schiphol Amsterdam"
              InputProps={{
                readOnly: true,
                sx: { bgcolor: 'white', color: 'black', height: 48, '& fieldset': { border: 'none' } }
              }}
            />
          </Grid>

          {/* Passengers */}
          <Grid item xs={6} sm={3} lg={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>Passengers</Typography>
            <Box sx={{ position: 'relative' }}>
              <Users style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: 16, height: 16 }} />
              <TextField
                fullWidth
                value="1 Adult, 2..."
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
