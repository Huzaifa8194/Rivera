import { Button, Box, AppBar, Toolbar, Typography, Container, Badge, IconButton } from "@mui/material"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import UserMenu from "./UserMenu"

export default function Header() {
  return (
    <AppBar 
      position="absolute" 
      sx={{ 
        bgcolor: 'transparent',
        boxShadow: 'none',
        zIndex: 50
      }}
    >
      <Box sx={{ px: 0 }}>
        <Toolbar sx={{ px: 0, py: 2, justifyContent: 'space-between', minHeight: 'auto' }}>
          {/* Logo Section - Far Left */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <img src="/logo-white.png" alt="Reviera Travel" style={{ height: '140px', width: 'auto' }} />
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
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { color: '#000000' },
                transition: 'color 0.2s'
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="/featured"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Featured
            </Typography>
            <Typography
              component="a"
              href="/about"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              About Us
            </Typography>
            <Typography
              component="a"
              href="/blog"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Blog
            </Typography>
            <Typography
              component="a"
              href="/contact"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Contact Us
            </Typography>
          </Box>

          {/* Action Icons and Button - Far Right */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 3 }}>
            {/* Locale/flag */}
            <IconButton size="small" sx={{ bgcolor: '#000000', color: 'white', '&:hover': { bgcolor: '#333333' } }}>
              <FlagOutlinedIcon fontSize="small" />
            </IconButton>

            {/* Shopping cart with badge */}
            <Badge badgeContent={1} color="error">
              <IconButton size="small" sx={{ bgcolor: '#000000', color: 'white', '&:hover': { bgcolor: '#333333' } }}>
                <ShoppingCartOutlinedIcon fontSize="small" />
              </IconButton>
            </Badge>
            <UserMenu />
            
            {/* Book with Us button */}
            <Button 
              variant="outlined"
              sx={{
                borderColor: '#000000',
                color: '#000000',
                bgcolor: 'white',
                px: 3,
                py: 1,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  borderColor: '#000000'
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
