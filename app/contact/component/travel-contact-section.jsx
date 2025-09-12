"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { LocationOn, Email, Phone, AccessTime } from '@mui/icons-material';

export default function TravelContactSection() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 4 }, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Journey Planning Section */}
        <Box sx={{ mb: 12 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 4, md: 8 },
            flexDirection: { xs: 'column', lg: 'row' }
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                  color: '#1a1a1a'
                }}
              >
                Let's Plan Your Next <Box component="span" sx={{ color: '#3b82f6' }}>Journey</Box> Together
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                  color: '#666',
                  mb: 0
                }}
              >
                Have Questions About Destinations, Bookings, Or Custom Trips? We're Here To Help You Make Every Mile
                Unforgettable.
              </Typography>
            </Box>
            <Box sx={{ 
              flex: 1, 
              maxWidth: 500,
              order: { xs: -1, lg: 1 }
            }}>
              <Box
                component="img"
                src="/contact/next-destination-image.png"
                alt="Travel items including hat, airplane, camera, and travel documents on blue background"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: '#1a1a1a'
              }}
            >
              Get In Touch With REVIERA TRAVEL
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#666',
                maxWidth: 600,
                mx: 'auto',
                mb: 0
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate, mNunc
              dapibus ullamcorper mollis. Sed tincidunt
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  bgcolor: '#1e3a5f',
                  color: 'white',
                  border: '2px solid #000000',
                  height: '100%',
                  minHeight: 200,
                  minWidth: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: '#f8fafc',
                    color: '#1a1a1a',
                    border: '2px solid #000000',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    '& .icon-container': {
                      bgcolor: '#1e3a5f',
                      color: 'white'
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box
                    className="icon-container"
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: '#1e3a5f',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <LocationOn sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Our Location
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.4,
                      opacity: 0.9,
                      mb: 0
                    }}
                  >
                    7 Division St, New York, USA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  bgcolor: '#1e3a5f',
                  color: 'white',
                  border: '2px solid #000000',
                  height: '100%',
                  minHeight: 200,
                  minWidth: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: '#f8fafc',
                    color: '#1a1a1a',
                    border: '2px solid #000000',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    '& .icon-container': {
                      bgcolor: '#1e3a5f',
                      color: 'white'
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box
                    className="icon-container"
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: '#1e3a5f',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Email sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.4,
                      opacity: 0.9,
                      mb: 0
                    }}
                  >
                    Support@Yourdomain.Com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  bgcolor: '#1e3a5f',
                  color: 'white',
                  border: '2px solid #000000',
                  height: '100%',
                  minHeight: 200,
                  minWidth: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: '#f8fafc',
                    color: '#1a1a1a',
                    border: '2px solid #000000',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    '& .icon-container': {
                      bgcolor: '#1e3a5f',
                      color: 'white'
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box
                    className="icon-container"
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: '#1e3a5f',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Phone sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.4,
                      opacity: 0.9,
                      mb: 0
                    }}
                  >
                    +92 XXX XXX XXXX
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  bgcolor: '#1e3a5f',
                  color: 'white',
                  border: '2px solid #000000',
                  height: '100%',
                  minHeight: 200,
                  minWidth: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: '#f8fafc',
                    color: '#1a1a1a',
                    border: '2px solid #000000',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    '& .icon-container': {
                      bgcolor: '#1e3a5f',
                      color: 'white'
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box
                    className="icon-container"
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: '#1e3a5f',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <AccessTime sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Working Hours
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.4,
                      opacity: 0.9,
                      mb: 0
                    }}
                  >
                    Mon-Fri | 9:00 AM – 6:00 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
