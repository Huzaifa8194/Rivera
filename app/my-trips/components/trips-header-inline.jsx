"use client"

import { Box, Typography, TextField, InputAdornment, Tabs, Tab } from "@mui/material"
import { Search } from "lucide-react"
import { useState } from "react"

export function TripsHeaderInline() {
  const [tabIndex, setTabIndex] = useState(0)
  const brand = '#002640'

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="caption" sx={{ color: brand, fontWeight: 600 }}>
        EXPLORE YOUR RECENT TRIPS
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5, color: brand }}>
        My Trips
      </Typography>

      <TextField
        fullWidth
        placeholder="Search anything here.."
        InputProps={{
          sx: { bgcolor: 'white', height: 44, mt: 1, '& fieldset': { borderColor: '#e5e7eb' } },
          endAdornment: (
            <InputAdornment position="end">
              <Search size={18} />
            </InputAdornment>
          )
        }}
      />

      <Tabs
        value={tabIndex}
        onChange={(_, v) => setTabIndex(v)}
        sx={{ mt: 1, '& .MuiTab-root': { textTransform: 'none' }, '& .MuiTabs-indicator': { bgcolor: brand }, '& .Mui-selected': { color: brand + ' !important', fontWeight: 700 } }}
      >
        <Tab label="Upcoming" />
        <Tab label="Past" />
      </Tabs>
    </Box>
  )
}


