import { Box, Typography, Container } from "@mui/material"

export default function AboutHeader() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/about/about-us-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.6)'
        }}
      />
      
      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          px: 2
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 2,
            opacity: 0.9
          }}
        >
          We Are Dedicated
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3.75rem', md: '4.5rem', lg: '6rem' },
            fontWeight: 'bold',
            lineHeight: 1
          }}
        >
          About Us
        </Typography>
      </Container>
    </Box>
  )
}
