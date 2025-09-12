import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Paper
} from "@mui/material"

export default function WhyBookWithUs() {
    const features = [
      {
        icon: "💰",
        title: "Best Price Guarantee",
        description:
          "We constantly compare prices across leading travel providers to ensure you always get the lowest possible rate for your dream vacation. If you find the same package or stay elsewhere, we'll match it – giving you peace of mind that you're getting unbeatable value.",
      },
      {
        icon: "📱",
        title: "Flexible Booking",
        description:
          "Plans change, and we understand that. That's why most of our packages offer free date changes or easy cancellations. Whether you need to reschedule your trip or adjust traveler details, we make the process stress-free and convenient.",
      },
      {
        icon: "✅",
        title: "Trusted by 50,000+ Travelers",
        description:
          "With thousands of happy customers and verified 5-star reviews, we're proud to be one of Europe's most trusted travel platforms. Every booking is processed securely, and your payment is fully protected under our guarantee.",
      },
      {
        icon: "🎧",
        title: "24/7 Dedicated Support",
        description:
          "Our travel experts are here to help you every step of the way – from choosing the perfect package to assisting during your trip. Whether it's a last-minute flight issue or a special request for your hotel, our team is available 24/7 to make sure your journey is smooth and memorable.",
      },
    ]
  
    return (
      <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              fontWeight: 'bold', 
              color: '#000000', 
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Why book with Us?
          </Typography>

          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
              maxWidth: '100%'
            }}
          >
            {features.map((feature, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  bgcolor: '#003a64',
                  borderRadius: 2,
                  p: 3,
                  color: 'white',
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Typography 
                    sx={{ 
                      fontSize: '2rem', 
                      lineHeight: 1,
                      flexShrink: 0
                    }}
                  >
                    {feature.icon}
                  </Typography>
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 2,
                        fontSize: '1.25rem'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#e9e9e9', 
                        lineHeight: 1.6,
                        fontSize: '0.875rem'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    )
  }
  