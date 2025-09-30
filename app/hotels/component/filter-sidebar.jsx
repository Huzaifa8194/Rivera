"use client"

import { 
  Card, 
  Checkbox, 
  Slider, 
  Button, 
  Box, 
  Typography, 
  FormControlLabel,
  Drawer,
  IconButton
} from "@mui/material"
import { Filter, X } from "lucide-react"
import { useState } from "react"

export function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const FilterContent = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Deals */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Deals</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Early Booker"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>24</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Last Minute"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>12</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Member Offer"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>8</Typography>
          </Box>
        </Box>
      </Card>

      {/* Price per night */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Price per night</Typography>
        <Box sx={{ px: 1 }}>
          <Slider
            defaultValue={[80, 300]}
            max={1000}
            step={10}
            valueLabelDisplay="auto"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>€80</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>€300</Typography>
          </Box>
        </Box>
      </Card>

      {/* Meal plan */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Meal plan</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Room only"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>45</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Bed & Breakfast"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>23</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Half Board"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>18</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="All Inclusive"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>12</Typography>
          </Box>
        </Box>
      </Card>

      {/* Popular amenities */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Popular amenities</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Free WiFi"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>67</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Swimming pool"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>45</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Spa"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>23</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Parking"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>31</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )

  return (
    <>
      <Box sx={{ display: { lg: 'none' }, mb: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setIsOpen(true)}
          startIcon={<Filter />}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Filters
        </Button>
      </Box>

      <Box sx={{ display: { xs: 'none', lg: 'block' }, width: 256 }}>
        <FilterContent />
      </Box>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ display: { lg: 'none' } }}
      >
        <Box sx={{ width: 320, p: 3, height: '100%', overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>Filters</Typography>
            <IconButton onClick={() => setIsOpen(false)} size="small">
              <X />
            </IconButton>
          </Box>
          <FilterContent />
        </Box>
      </Drawer>
    </>
  )
}


