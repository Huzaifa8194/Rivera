import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  Button,
  IconButton
} from "@mui/material"
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#003a64', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            alignItems: 'start'
          }}
        >
          {/* Logo and Social */}
          <Box>
            <Box sx={{ mb: 3 }}>
              <img src="/logo-white.png" alt="Reviera Travel" style={{ height: '160px', width: 'auto' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FaInstagram 
                  style={{ 
                    fontSize: '18px',
                    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FaFacebook 
                  style={{ 
                    fontSize: '18px',
                    color: '#1877f2'
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FaXTwitter 
                  style={{ 
                    fontSize: '18px',
                    color: '#000000'
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                'Home', 'Featured', 'Vacation Packages', 'Travel Inspiration (Blog)', 
                'Wishlist / Favorites', 'My Bookings', 'Contact Us', 'About Us'
              ].map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: '#e9e9e9',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                      transition: 'color 0.2s',
                      fontSize: '0.875rem'
                    }}
                  >
                    {link}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Support */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Support
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                'Terms & Conditions', 'Privacy Policy (GDPR Compliant)', 'Complaint Procedure',
                'Guarantee & Consumer Protection', 'FAQ & Help Center'
              ].map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: '#e9e9e9',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                      transition: 'color 0.2s',
                      fontSize: '0.875rem'
                    }}
                  >
                    {link}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Newsletter - Right aligned */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#e9e9e9', 
                mb: 2, 
                lineHeight: 1.6,
                fontSize: '0.875rem'
              }}
            >
              Be the first to know about exclusive deals, hidden gems, and last-minute offers across Europe.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                type="email"
                placeholder="Enter your Email..."
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  minWidth: '200px',
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                    color: '#000000',
                    borderRadius: '4px',
                    '& fieldset': {
                      border: 'none'
                    },
                    '& input': {
                      '&::placeholder': {
                        color: '#444444',
                        opacity: 1
                      }
                    }
                  }
                }}
              />
              <Button 
                variant="contained"
                sx={{
                  bgcolor: '#003a64',
                  color: 'white',
                  px: 3,
                  py: 1.5,
                  borderRadius: '4px',
                  fontWeight: 500,
                  minWidth: '100px',
                  '&:hover': {
                    bgcolor: '#002a4a'
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
