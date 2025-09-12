import { Button, Box, AppBar, Toolbar, Typography, Container, Badge } from "@mui/material"

export default function StickyNavbar() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: 50
      }}
    >
      <Box sx={{ px: 0 }}>
        <Toolbar sx={{ px: 0, py: 2, justifyContent: 'space-between', minHeight: 'auto' }}>
          {/* Logo Section - Far Left */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <img src="/logo-black.png" alt="Reviera Travel" style={{ height: '60px', width: 'auto' }} />
          </Box>

          {/* Navigation Links - Center */}
          <Box 
            component="nav" 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              gap: 4,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <Typography
              component="a"
              href="/"
              sx={{
                color: '#1e293b',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { color: '#64748b' },
                transition: 'color 0.2s'
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="/featured"
              sx={{
                color: '#1e293b',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#64748b' },
                transition: 'color 0.2s'
              }}
            >
              Featured
            </Typography>
            <Typography
              component="a"
              href="/about"
              sx={{
                color: '#1e293b',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#64748b' },
                transition: 'color 0.2s'
              }}
            >
              About Us
            </Typography>
            <Typography
              component="a"
              href="/blog"
              sx={{
                color: '#1e293b',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#64748b' },
                transition: 'color 0.2s'
              }}
            >
              Blog
            </Typography>
            <Typography
              component="a"
              href="/contact"
              sx={{
                color: '#1e293b',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#64748b' },
                transition: 'color 0.2s'
              }}
            >
              Contact Us
            </Typography>
          </Box>

          {/* Action Icons and Button - Far Right */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 3 }}>
            {/* Flag icon */}
            <Box 
              sx={{ 
                width: 24, 
                height: 24, 
                bgcolor: '#1e293b', 
                borderRadius: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#334155' }
              }}
            >
              <span style={{ color: 'white', fontSize: '14px' }}>🏁</span>
            </Box>
            
            {/* Shopping cart with badge */}
            <Badge badgeContent={1} color="error">
              <Box 
                sx={{ 
                  width: 24, 
                  height: 24, 
                  bgcolor: '#1e293b', 
                  borderRadius: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#334155' }
                }}
              >
                <span style={{ color: 'white', fontSize: '14px' }}>🛒</span>
              </Box>
            </Badge>
            
            {/* Book with Us button */}
            <Button 
              variant="outlined"
              sx={{
                borderColor: '#1e293b',
                color: '#1e293b',
                bgcolor: 'white',
                px: 3,
                py: 1,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f8fafc',
                  borderColor: '#1e293b'
                }
              }}
            >
              Book with Us
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
