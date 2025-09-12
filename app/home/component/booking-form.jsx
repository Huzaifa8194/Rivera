import { Button, Box, Typography, Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Paper } from "@mui/material"

export default function SearchForm() {
  return (
    <Box sx={{ bgcolor: '#003a64', py: 6 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'white', 
            mb: 4, 
            textAlign: 'left',
            fontWeight: 'bold'
          }}
        >
          Your best trip is one search away...
        </Typography>

        <Paper 
          elevation={3}
          sx={{ 
            bgcolor: 'white', 
            borderRadius: 2, 
            p: 3, 
            maxWidth: '6xl', 
            mx: 'auto' 
          }}
        >
          <Grid container spacing={2}>
            {/* Location */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444' }}>
                Location
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                p: 1.5, 
                border: '1px solid #e5e5e5', 
                borderRadius: 1 
              }}>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ width: 8, height: 16, bgcolor: 'blue.600' }}></Box>
                  <Box sx={{ width: 8, height: 16, bgcolor: 'white' }}></Box>
                  <Box sx={{ width: 8, height: 16, bgcolor: 'red.600' }}></Box>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#000000' }}>
                  Paris, France
                </Typography>
              </Box>
            </Grid>

            {/* From */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444' }}>
                From
              </Typography>
              <Box sx={{ 
                p: 1.5, 
                border: '1px solid #e5e5e5', 
                borderRadius: 1 
              }}>
                <Typography sx={{ fontWeight: 600, color: '#000000' }}>
                  31/07/2025
                </Typography>
              </Box>
            </Grid>

            {/* To */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444' }}>
                To
              </Typography>
              <Box sx={{ 
                p: 1.5, 
                border: '1px solid #e5e5e5', 
                borderRadius: 1 
              }}>
                <Typography sx={{ color: '#444444' }}>
                  Add date
                </Typography>
              </Box>
            </Grid>

            {/* Departure Airport */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444' }}>
                Departure Airport
              </Typography>
              <Box sx={{ 
                p: 1.5, 
                border: '1px solid #e5e5e5', 
                borderRadius: 1 
              }}>
                <Typography sx={{ fontWeight: 600, color: '#000000' }}>
                  Schipol Amsterdam...
                </Typography>
              </Box>
            </Grid>

            {/* Passengers */}
            <Grid item xs={12} md={2}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444' }}>
                Passengers
              </Typography>
              <Box sx={{ 
                p: 1.5, 
                border: '1px solid #e5e5e5', 
                borderRadius: 1 
              }}>
                <Typography sx={{ fontWeight: 600, color: '#000000' }}>
                  1 Adult, 2...
                </Typography>
              </Box>
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'end' }}>
              <Button 
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#003a64',
                  color: 'white',
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: '#00223a'
                  }
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
