"use client"

import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  CardMedia,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useState, useRef } from "react"

export default function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const picks = [
    {
      id: 1,
      title: "Paris City Escape",
      date: "10/08/2025",
      description:
        "Experience the charm of the City of Love with visits to the Eiffel Tower, Seine River cruises, and exclusive wine tastings in Montmartre. Includes hotel and breakfast.",
      duration: "4 Nights, 5 Days",
      price: "€349",
      priceNote: "/ person",
    },
    {
      id: 2,
      title: "Paris City Escape",
      date: "10/08/2025",
      description:
        "Experience the charm of the City of Love with visits to the Eiffel Tower, Seine River cruises, and exclusive wine tastings in Montmartre. Includes hotel and breakfast.",
      duration: "4 Nights, 5 Days",
      price: "€349",
      priceNote: "/ person",
    },
    {
      id: 3,
      title: "Paris City Escape",
      date: "10/08/2025",
      description:
        "Experience the charm of the City of Love with visits to the Eiffel Tower, Seine River cruises, and exclusive wine tastings in Montmartre. Includes hotel and breakfast.",
      duration: "4 Nights, 5 Days",
      price: "€349",
      priceNote: "/ person",
    },
    {
      id: 4,
      title: "Paris City Escape",
      date: "10/08/2025",
      description:
        "Experience the charm of the City of Love with visits to the Eiffel Tower, Seine River cruises, and exclusive wine tastings in Montmartre. Includes hotel and breakfast.",
      duration: "4 Nights, 5 Days",
      price: "€349",
      priceNote: "/ person",
    },
  ]

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / picks.length
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / picks.length
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
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
          Our Top Picks for 2025
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={scrollToPrev}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: '#003a64',
              color: 'white',
              width: 40,
              height: 40,
              zIndex: 2,
              '&:hover': {
                bgcolor: '#00223a'
              },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={scrollToNext}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: '#003a64',
              color: 'white',
              width: 40,
              height: 40,
              zIndex: 2,
              '&:hover': {
                bgcolor: '#00223a'
              },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Scrollable Cards Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              pb: 2,
              px: { xs: 1, md: 0 }
            }}
          >
            {picks.map((pick) => (
              <Card
                key={pick.id}
                sx={{
                  minWidth: { xs: 280, md: 320 },
                  maxWidth: { xs: 280, md: 320 },
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  bgcolor: 'white',
                  flexShrink: 0
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    backgroundImage: `url('/autumn-mountain-landscape.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px 8px 0 0'
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#000000',
                        fontSize: '1.125rem'
                      }}
                    >
                      {pick.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        fontSize: '0.875rem'
                      }}
                    >
                      {pick.date}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#444444',
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.875rem'
                    }}
                  >
                    {pick.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#444444',
                        fontSize: '0.875rem'
                      }}
                    >
                      {pick.duration}
                    </Typography>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#000000',
                          fontSize: '1.25rem',
                          lineHeight: 1
                        }}
                      >
                        {pick.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          fontSize: '0.75rem'
                        }}
                      >
                        {pick.priceNote}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
