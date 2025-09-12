"use client"

import { useRef } from "react"
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardMedia,
  IconButton
} from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

export default function PlanVacation() {
  const scrollContainerRef = useRef(null)

  const categories = [
    {
      title: "Sun Holidays",
      subtitle: "222 HOLIDAYS",
      image: "/sunny-beach-vacation.png",
    },
    {
      title: "City Trips",
      subtitle: "222 HOLIDAYS",
      image: "/friends-city-walk.png",
    },
    {
      title: "Long Journeys",
      subtitle: "222 HOLIDAYS",
      image: "/train-platform-journey.png",
    },
    {
      title: "Last Minutes",
      subtitle: "222 HOLIDAYS",
      image: "/woman-traveling.png",
    },
    {
      title: "Mountain Adventures",
      subtitle: "156 HOLIDAYS",
      image: "/autumn-mountain-landscape.png",
    },
    {
      title: "Beach Relaxation",
      subtitle: "189 HOLIDAYS",
      image: "/beach-relaxation.png",
    },
  ]

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / categories.length
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / categories.length
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <Box sx={{ py: 8, bgcolor: '#e9e9e9' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#000000', 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Plan Your Ideal Vacation
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#444444', 
              maxWidth: 'md', 
              mx: 'auto',
              fontSize: '1rem'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula
          </Typography>
        </Box>

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
            {categories.map((category, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: { xs: 280, md: 320 },
                  maxWidth: { xs: 280, md: 320 },
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 256,
                      backgroundImage: `url('${category.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  {/* Dark overlay gradient for text readability */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 3
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.25rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        opacity: 0.9,
                        fontSize: '0.875rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {category.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
