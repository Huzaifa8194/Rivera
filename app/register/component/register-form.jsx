"use client"

import { useState } from 'react'
import { Box, Container, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { auth, db } from '../../lib/firebaseClient'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore/lite'

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    affiliateLink: '',
    bookingId: ''
  })

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const credential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      const user = credential.user
      // Ensure displayName exists (optional)
      if (!user.displayName) {
        await updateProfile(user, { displayName: formData.email.split('@')[0] })
      }
      // Create users document with ALL submitted fields
      const userDoc = {
        uid: user.uid,
        email: formData.email,
        affiliateLink: formData.affiliateLink || '',
        bookingId: formData.bookingId || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
      await setDoc(doc(db, 'users', user.uid), userDoc, { merge: true })
      window.location.href = '/my-account'
    } catch (err) {
      console.error(err)
      alert(err.message || 'Registration failed')
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const credential = await signInWithPopup(auth, provider)
      const user = credential.user
      // Create users document (Google provides email, displayName, photoURL)
      const userDoc = {
        uid: user.uid,
        email: user.email || '',
        affiliateLink: formData.affiliateLink || '',
        bookingId: formData.bookingId || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
      await setDoc(doc(db, 'users', user.uid), userDoc, { merge: true })
      window.location.href = '/my-account'
    } catch (err) {
      console.error(err)
      alert(err.message || 'Google sign up failed')
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
            <Box sx={{ mb: 6 }}>
              <img 
                src="/logo-black.png" 
                alt="Reviera Travel" 
                style={{ 
                  height: '120px', 
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

          {/* Right Side - Registration Form */}
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

                {/* Confirm Password */}
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
                    Confirm Password
                  </Typography>
                  <TextField
                    fullWidth
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange('confirmPassword')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                            size="small"
                          >
                            {showConfirmPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
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

                {/* Affiliate Link */}
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
                    Affiliate Link
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="https://example.com/affiliate/..."
                    value={formData.affiliateLink}
                    onChange={handleInputChange('affiliateLink')}
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

                {/* Booking ID */}
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    Booking ID
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="e.g., RV-123456"
                    value={formData.bookingId}
                    onChange={handleInputChange('bookingId')}
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

                {/* Sign Up Button */}
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
                  Sign up
                </Button>

                {/* Divider */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mx: 2, fontSize: '0.875rem' }}>
                    or
                  </Typography>
                  <Box sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                </Box>

                {/* Google Sign Up Button */}
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleSignUp}
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
                  Sign up with Google
                </Button>

                {/* Login Link */}
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Typography
                    component="a"
                    href="/login"
                    sx={{
                      color: 'white',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#1976d2'
                      }
                    }}
                  >
                    Sign in
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
