"use client"

import { Box, Card, Typography, FormControlLabel, Checkbox } from "@mui/material"

export function TripsSidebar() {
  return (
    <Box sx={{ width: 256, display: { xs: 'none', lg: 'block' } }}>
      <Card sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Discount</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Simply Priced" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">19</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Cash Discount" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">12</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Heaven Deals" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">08</Typography>
          </Box>
        </Box>
        <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}>Show More Categories</Typography>
      </Card>

      <Card sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Care</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Accommodation" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">19</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Bed and Breakfast" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">12</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Half Board" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">08</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="Full Board" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">08</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox size="small" />} label="All Inclusive" sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }} />
            <Typography variant="caption">08</Typography>
          </Box>
        </Box>
        <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}>Show More Categories</Typography>
      </Card>
    </Box>
  )
}


