"use client"

import { useState } from 'react'
import { Box, Container, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { auth, db } from '../../lib/firebaseClient'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      window.location.href = '/my-account'
    } catch (err) {
      console.error(err)
      alert(err.message || 'Login failed')
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const credential = await signInWithPopup(auth, provider)
      const user = credential.user
      // Upsert users doc to ensure exists
      const userDoc = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        updatedAt: serverTimestamp(),
      }
      await setDoc(doc(db, 'users', user.uid), userDoc, { merge: true })
      window.location.href = '/my-account'
    } catch (err) {
      console.error(err)
      alert(err.message || 'Google sign in failed')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/home/home-landing.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Background overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      />

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          py: 4
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            display: 'flex', 
            width: '100%', 
            maxWidth: '1400px',
            mx: 'auto',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.25)',
            backgroundImage: `url('/home/home-landing.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Left Side - Hero Content */}
          <Box 
            sx={{ 
              position: 'relative',
              zIndex: 2,
              flex: 1,
              p: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 0 }}>
              <img 
                src="/logo-white.png" 
                alt="Reviera Travel" 
                style={{ 
                  height: '220px', 
                  width: 'auto'
                }} 
              />
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 700,
                lineHeight: 0.9,
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                mb: 3
              }}
            >
              Discover
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 700,
                lineHeight: 0.9,
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                mb: 4
              }}
            >
              Europe
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.92)',
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                maxWidth: '480px'
              }}
            >
              Explore stunning destinations, unforgettable experiences, and tailored vacation packages across Europe.
            </Typography>
          </Box>

          {/* Right Side - Login Form */}
          <Box 
            sx={{ 
              position: 'relative',
              zIndex: 2,
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 4, md: 6, lg: 8 }
            }}
          >
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: 480,
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                backdropFilter: 'blur(8px) saturate(110%)',
                borderRadius: 4,
                p: 3,
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& fieldset': {
                          border: 'none'
                        },
                        '&:hover fieldset': {
                          border: 'none'
                        },
                        '&.Mui-focused fieldset': {
                          border: '2px solid #1976d2'
                        }
                      },
                      '& .MuiInputBase-input': {
                        py: 1.5,
                        fontSize: '0.875rem'
                      }
                    }}
                  />
                </Box>

                {/* Password */}
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                            size="small"
                          >
                            {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& fieldset': {
                          border: 'none'
                        },
                        '&:hover fieldset': {
                          border: 'none'
                        },
                        '&.Mui-focused fieldset': {
                          border: '2px solid #1976d2'
                        }
                      },
                      '& .MuiInputBase-input': {
                        py: 1.5,
                        fontSize: '0.875rem'
                      }
                    }}
                  />
                </Box>

                {/* Forget Password Link */}
                <Box sx={{ textAlign: 'right', mb: 4 }}>
                  <Typography
                    component="a"
                    href="/forgot-password"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'white'
                      }
                    }}
                  >
                    Forget Password
                  </Typography>
                </Box>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    py: 1.5,
                    mb: 3,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#1565c0'
                    }
                  }}
                >
                  Sign in
                </Button>

                {/* Divider */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mx: 2, fontSize: '0.875rem' }}>
                    or
                  </Typography>
                  <Box sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                </Box>

                {/* Google Sign In Button */}
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleSignIn}
                  startIcon={
                    <Box
                      component="img"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY0IDkuMjA0NTVDMTcuNjQgOC41NjY4MiAxNy41ODI3IDcuOTUyMjcgMTcuNDc2NCA3LjM2MzY0SDlWMTAuODQ1SDE0LjA0MzZDMTMuODM2NCAyLjAxNzI3IDEzLjE0MDkgMTEuMzIyNyAxMi4wNTQ1IDEzLjUyNzNWMTYuMjI3M0gxNC4yM0MxNi4xOTU0IDE0LjEzNjQgMTcuNjQgMTEuODk1NCAxNy42NCA5LjIwNDU1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNOC45OTkzOSAxOUMyLjMyOTQgMTkgMTQuNzMgMTUuMTkwOSAxNC43MyAxMS4yNzI3QzE0LjczIDEwLjA4NjQgMTQuNDEzIDguOTQ1NDUgMTMuODQxOCA3Ljk3NzI3TDcuOTQxOTcgMTEuNDYzNkMxMS4zODU5IDEyLjMwNDUgMTIuNDE5NSAxNS41IDE4IDEzLjYzNjRDMTcuNTkwOSAxNS4xOTA5IDE2LjEzNjQgMTkgOC45OTkzOSAxOVoiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTcuOTQxOTcgMTEuNDYzNkw3Ljk0IDE5VjExLjQ2MzZDOS40MjI3IDEwLjk2MzYgMTEuMzg1OSAxMC42MTM2IDEyLjQ2MzYgOS42M0ExNi4zNzM2TDcuOTQxOTcgMTEuNDYzNloiIGZpbGw9IiNFQTQzMzUiLz4KPHBhdGggZD0iTTguOTk5MzkgNi41NEM3LjcwOTEgNi41NCA2LjUzMTM5IDYuOTQ1NDUgNS42NjMxNiA3LjgwOTA5TDMuNDk5NjEgNS42MTM2NEMxLjkwOTQ5IDcuMjQ1NDUgMCA5IDAgOC45OTkzOUMwIDEzLjkyNzMgMy44ODYzNiAxOCA4Ljk5OTM5IDE4QzExLjI3NzMgMTguMDQ5MSAxMy4zNSAxNy4xNjgyIDE0LjczIDE1LjE5MDlMMTIuNDYzNiA5LjYzQzExLjU0NSA2LjgzNjM2IDEwLjM0MDkgNi41NCA4Ljk5OTM5IDYuNTRaIiBmaWxsPSIjMzRBODUzIi8+Cjwvc3ZnPgo="
                      alt="Google"
                      sx={{ width: 18, height: 18 }}
                    />
                  }
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    py: 1.5,
                    mb: 3,
                    borderRadius: 2,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Sign in with Google
                </Button>

                {/* Register Link */}
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', textAlign: 'center' }}>
                  Don't have an account?{' '}
                  <Typography
                    component="a"
                    href="/register"
                    sx={{
                      color: 'white',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#1976d2'
                      }
                    }}
                  >
                    Register
                  </Typography>
                </Typography>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
