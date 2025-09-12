import { Box, Container, Typography } from '@mui/material';

export default function BlogHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundImage: 'url(/blog/hero-mountain.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        },
      }}
    >
      {/* Hero Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 4, md: 8, lg: 12 },
          maxWidth: '4xl',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 'tight',
            mb: 3,
            maxWidth: '4xl',
          }}
        >
          Latest news, articles, and posts
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '2xl',
            lineHeight: 'relaxed',
          }}
        >
          Check out the latest posts, news and articles from our side and keep updated.
        </Typography>
      </Container>
    </Box>
  );
}


