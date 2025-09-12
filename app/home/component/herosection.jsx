import { Button, Box, Typography, Container, Grid, Paper } from "@mui/material"

export default function HeroSection() {
  return (
    <Box
      data-hero-section
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url('/home/home-landing.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}
      />

      {/* Main Hero Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          px: 3,
          pt: 20,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: '3rem', md: '4rem' },
            fontFamily: "Dancing Script, cursive",
            fontWeight: 400
          }}
        >
          Discover Europe, Your Way
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: 'md',
            mx: 'auto',
            lineHeight: 1.6,
            fontSize: { xs: '1.125rem', md: '1.25rem' }
          }}
        >
          Explore stunning destinations, unforgettable experiences, and tailored vacation packages across Europe.
          Whether you're dreaming of the Swiss Alps, Mediterranean beaches, or historic city escapes, we make it happen.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center'
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: 'white',
              color: 'white',
              bgcolor: 'transparent',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 500,
              '&:hover': {
                bgcolor: 'white',
                color: 'black'
              }
            }}
          >
            FIND YOUR PERFECT TRIP
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'black',
              color: 'white',
              border: '1px solid white',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 500,
              '&:hover': {
                bgcolor: '#333333'
              }
            }}
          >
            EXPLORE TOP DEALS
          </Button>
        </Box>
      </Container>

      {/* Search Form - Bottom of Hero Section */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg" sx={{ px: 3, pb: 4 }}>
          <Box sx={{ 
            bgcolor: '#003a64', 
            py: 4, 
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'white', 
                mb: 3, 
                textAlign: 'left',
                fontWeight: 'bold',
                px: 3
              }}
            >
              Your best trip is one search away...
            </Typography>

            <Paper 
              elevation={0}
              sx={{ 
                bgcolor: '#f8f9fa', 
                borderRadius: 2, 
                p: 3, 
                mx: 3,
                border: '1px solid #e9ecef'
              }}
            >
              <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                {/* Location */}
                <Grid item xs={12} md={1.8}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444', fontSize: '0.875rem' }}>
                    Location
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    p: 2, 
                    border: '1px solid #dee2e6', 
                    borderRadius: 1,
                    bgcolor: 'white',
                    minHeight: '48px'
                  }}>
                    <Box sx={{ display: 'flex', flexShrink: 0 }}>
                      <Box sx={{ width: 8, height: 16, bgcolor: '#0052cc' }}></Box>
                      <Box sx={{ width: 8, height: 16, bgcolor: 'white' }}></Box>
                      <Box sx={{ width: 8, height: 16, bgcolor: '#d73a49' }}></Box>
                    </Box>
                    <Typography sx={{ fontWeight: 600, color: '#000000', fontSize: '0.875rem' }}>
                      Paris, France
                    </Typography>
                  </Box>
                </Grid>

                {/* From */}
                <Grid item xs={12} md={1.8}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444', fontSize: '0.875rem' }}>
                    From
                  </Typography>
                  <Box sx={{ 
                    p: 2, 
                    border: '1px solid #dee2e6', 
                    borderRadius: 1,
                    bgcolor: 'white',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontWeight: 600, color: '#000000', fontSize: '0.875rem' }}>
                      31/07/2025
                    </Typography>
                  </Box>
                </Grid>

                {/* To */}
                <Grid item xs={12} md={1.8}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444', fontSize: '0.875rem' }}>
                    To
                  </Typography>
                  <Box sx={{ 
                    p: 2, 
                    border: '1px solid #dee2e6', 
                    borderRadius: 1,
                    bgcolor: 'white',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                      Add date
                    </Typography>
                  </Box>
                </Grid>

                {/* Departure Airport */}
                <Grid item xs={12} md={1.8}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444', fontSize: '0.875rem' }}>
                    Departure Airport
                  </Typography>
                  <Box sx={{ 
                    p: 2, 
                    border: '1px solid #dee2e6', 
                    borderRadius: 1,
                    bgcolor: 'white',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontWeight: 600, color: '#000000', fontSize: '0.875rem' }}>
                      Schipol Amsterdam...
                    </Typography>
                  </Box>
                </Grid>

                {/* Passengers */}
                <Grid item xs={12} md={1.8}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#444444', fontSize: '0.875rem' }}>
                    Passengers
                  </Typography>
                  <Box sx={{ 
                    p: 2, 
                    border: '1px solid #dee2e6', 
                    borderRadius: 1,
                    bgcolor: 'white',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontWeight: 600, color: '#000000', fontSize: '0.875rem' }}>
                      1 Adult, 2...
                    </Typography>
                  </Box>
                </Grid>

                {/* Search Button */}
                <Grid item xs={12} md={1.8} sx={{ display: 'flex', alignItems: 'end' }}>
                  <Button 
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#003a64',
                      color: 'white',
                      py: 1.5,
                      borderRadius: 1,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      minHeight: '48px',
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
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
