import { Box, Container, Typography } from '@mui/material';

export default function ContactHero() {
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
          backgroundImage: 'url(/contact/contact-hero-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
          We are here to help
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3.75rem', md: '4.5rem', lg: '6rem' },
            fontWeight: 'bold',
            lineHeight: 1
          }}
        >
          Contact Us
        </Typography>
      </Container>
    </Box>
  );
}
