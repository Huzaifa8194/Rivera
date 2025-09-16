import { useEffect, useState } from "react"
import { Button, Box, AppBar, Toolbar, Typography, Badge, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined"
import Link from "next/link"
import { auth } from "../lib/firebaseClient"
import { onAuthStateChanged, signOut } from "firebase/auth"
import UserMenu from "./UserMenu"

export default function StickyNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setCurrentUser(u))
    return () => unsub()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } finally {
      setMobileOpen(false)
    }
  }

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

          {/* Desktop Actions - Far Right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2, pr: 3 }}>
            {/* Locale/flag */}
            <IconButton size="small" sx={{ bgcolor: '#1e293b', color: 'white', '&:hover': { bgcolor: '#334155' } }}>
              <FlagOutlinedIcon fontSize="small" />
            </IconButton>

            {/* Shopping cart with badge */}
            <Badge badgeContent={1} color="error">
              <IconButton size="small" sx={{ bgcolor: '#1e293b', color: 'white', '&:hover': { bgcolor: '#334155' } }}>
                <ShoppingCartOutlinedIcon fontSize="small" />
              </IconButton>
            </Badge>
            <UserMenu loginButtonColor="#1e293b" />
            
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
              component={Link}
              href="/booking"
            >
              Book with Us
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', pr: 2 }}>
            <IconButton aria-label="Open menu" onClick={() => setMobileOpen(true)} sx={{ color: '#1e293b' }}>
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '85vw',
            maxWidth: 360,
            bgcolor: 'white',
            color: '#0f172a'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2, px: 2, borderBottom: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/logo-black.png" alt="Reviera Travel" style={{ height: '40px', width: 'auto' }} />
          </Box>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <List sx={{ py: 1 }}>
          <ListItemButton component={Link} href="/" onClick={() => setMobileOpen(false)}>
            <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} href="/featured" onClick={() => setMobileOpen(false)}>
            <ListItemIcon><StarBorderOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Featured" />
          </ListItemButton>
          <ListItemButton component={Link} href="/about" onClick={() => setMobileOpen(false)}>
            <ListItemIcon><InfoOutlinedIcon /></ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton component={Link} href="/blog" onClick={() => setMobileOpen(false)}>
            <ListItemIcon><ArticleOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
          <ListItemButton component={Link} href="/contact" onClick={() => setMobileOpen(false)}>
            <ListItemIcon><ContactMailOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>

        <Box sx={{ px: 2, py: 1 }}>
          <Button
            fullWidth
            component={Link}
            href="/booking"
            variant="contained"
            sx={{
              bgcolor: '#1e293b',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              py: 1.25,
              borderRadius: 1.5,
              '&:hover': { bgcolor: '#0f172a' }
            }}
            startIcon={<EventAvailableOutlinedIcon />}
            onClick={() => setMobileOpen(false)}
          >
            Book with Us
          </Button>
        </Box>

        <Divider />

        <List sx={{ py: 1 }}>
          {currentUser ? (
            <>
              <ListItemButton component={Link} href="/my-account" onClick={() => setMobileOpen(false)}>
                <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
                <ListItemText primary="My account" />
              </ListItemButton>
              <ListItemButton component={Link} href="/my-trips" onClick={() => setMobileOpen(false)}>
                <ListItemIcon><FlightTakeoffIcon /></ListItemIcon>
                <ListItemText primary="My Trips" />
              </ListItemButton>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton component={Link} href="/login" onClick={() => setMobileOpen(false)}>
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton component={Link} href="/register" onClick={() => setMobileOpen(false)}>
                <ListItemIcon><AppRegistrationIcon /></ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </>
          )}
        </List>

        <Divider />

        <Box sx={{ px: 2, py: 2, display: 'flex', gap: 1.5 }}>
          <IconButton size="small" sx={{ bgcolor: '#1e293b', color: 'white', '&:hover': { bgcolor: '#334155' } }}>
            <FlagOutlinedIcon fontSize="small" />
          </IconButton>
          <Badge badgeContent={1} color="error">
            <IconButton size="small" sx={{ bgcolor: '#1e293b', color: 'white', '&:hover': { bgcolor: '#334155' } }}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>
          </Badge>
        </Box>
      </Drawer>
    </AppBar>
  )
}
