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
      {/* Discount */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Discount</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Early Bird"
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
              label="Super Deal"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>8</Typography>
          </Box>
        </Box>
      </Card>

      {/* Price */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Price</Typography>
        <Box sx={{ px: 1 }}>
          <Slider
            defaultValue={[200, 800]}
            max={1000}
            step={50}
            valueLabelDisplay="auto"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>€200</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>€800</Typography>
          </Box>
        </Box>
      </Card>

      {/* Resort */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Resort</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="All Inclusive"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>45</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Half Board"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>23</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Bed & Breakfast"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>18</Typography>
          </Box>
        </Box>
      </Card>

      {/* Discount % */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Discount</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="10% or more"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>34</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="20% or more"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>18</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="30% or more"
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>7</Typography>
          </Box>
        </Box>
      </Card>

      {/* Extra */}
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>Extra</Typography>
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
              label="Swimming Pool"
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



