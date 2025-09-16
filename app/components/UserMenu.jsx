"use client"

import { useEffect, useMemo, useState } from "react"
import { Box, Avatar, Menu, MenuItem, IconButton, ListItemIcon, Tooltip, Divider } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"
import PersonIcon from "@mui/icons-material/Person"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import Link from "next/link"
import { auth } from "../lib/firebaseClient"
import { onAuthStateChanged, signOut } from "firebase/auth"

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const open = Boolean(anchorEl)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setCurrentUser(u))
    return () => unsub()
  }, [])

  const avatarSrc = currentUser?.photoURL || null
  const avatarLabel = useMemo(() => {
    if (!currentUser?.email) return ""
    return currentUser.email.charAt(0).toUpperCase()
  }, [currentUser])

  const handleOpen = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } finally {
      handleClose()
    }
  }

  return (
    <Box>
      <Tooltip title={currentUser ? currentUser.email : "Account"}>
        <IconButton onClick={handleOpen} size="small" sx={{ ml: 1 }} aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
          {currentUser ? (
            <Avatar src={avatarSrc || undefined} sx={{ width: 32, height: 32 }}>
              {avatarSrc ? null : avatarLabel}
            </Avatar>
          ) : (
            <AccountCircleIcon sx={{ color: 'currentColor' }} />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {currentUser ? (
          <>
            <MenuItem component={Link} href="/my-account">
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              My account
            </MenuItem>
            <MenuItem component={Link} href="/my-trips">
              <ListItemIcon>
                <FlightTakeoffIcon fontSize="small" />
              </ListItemIcon>
              My Trips
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={Link} href="/login">
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
            <MenuItem component={Link} href="/register">
              <ListItemIcon>
                <AppRegistrationIcon fontSize="small" />
              </ListItemIcon>
              Register
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  )
}


