import { 
  Card, 
  Button, 
  Box, 
  Typography, 
  Grid, 
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material"
import { Heart, Bed, Plane } from "lucide-react"

const resorts = [
  {
    id: 1,
    name: "Turquoise Resort Chogogo Dive & Beach Curacao",
    location: "Turquoise • Curacao Antilles • 5 star",
    rating: 8.9,
    date: "Thu Aug 28, 2025",
    departure: "Paris → Amsterdam",
    price: 349,
    image: "/tropical-mountain-ocean-resort.png",
  },
  {
    id: 2,
    name: "Turquoise Resort Chogogo Dive & Beach Curacao",
    location: "Turquoise • Curacao Antilles • 5 star",
    rating: 8.9,
    date: "Thu Aug 28, 2025",
    departure: "Paris → Amsterdam",
    price: 349,
    image: "/tropical-mountain-ocean-resort.png",
  },
  {
    id: 3,
    name: "Turquoise Resort Chogogo Dive & Beach Curacao",
    location: "Turquoise • Curacao Antilles • 5 star",
    rating: 8.9,
    date: "Thu Aug 28, 2025",
    departure: "Paris → Amsterdam",
    price: 349,
    image: "/tropical-mountain-ocean-resort.png",
  },
  {
    id: 4,
    name: "Turquoise Resort Chogogo Dive & Beach Curacao",
    location: "Turquoise • Curacao Antilles • 5 star",
    rating: 8.9,
    date: "Thu Aug 28, 2025",
    departure: "Paris → Amsterdam",
    price: 349,
    image: "/tropical-mountain-ocean-resort.png",
  },
  {
    id: 5,
    name: "Turquoise Resort Chogogo Dive & Beach Curacao",
    location: "Turquoise • Curacao Antilles • 5 star",
    rating: 8.9,
    date: "Thu Aug 28, 2025",
    departure: "Paris → Amsterdam",
    price: 349,
    image: "/tropical-mountain-ocean-resort.png",
  },
]

export function SearchResults() {
  return (
    <Box sx={{ flex: 1 }}>
      {/* Results Header */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { sm: 'center' }, 
        gap: 2, 
        mb: 3 
      }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Showing Results for: Paris, France
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            5 results found
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">Sort By:</Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select defaultValue="lowest-price" sx={{ height: 40 }}>
              <MenuItem value="lowest-price">Lowest Price</MenuItem>
              <MenuItem value="highest-rating">Highest Rating</MenuItem>
              <MenuItem value="most-popular">Most Popular</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Results List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {resorts.map((resort) => (
          <Card key={resort.id} sx={{ overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Image */}
              <Box sx={{ width: { xs: '100%', md: 288 }, height: 192, position: 'relative' }}>
                <img
                  src={resort.image || "/placeholder.svg"}
                  alt={resort.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', lg: 'row' }, 
                  justifyContent: 'space-between', 
                  alignItems: { lg: 'flex-start' }, 
                  gap: 2 
                }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {resort.name}
                      </Typography>
                      <Button variant="text" size="small" sx={{ p: 0.5, minWidth: 'auto' }}>
                        <Heart size={16} />
                      </Button>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {resort.location}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Chip 
                        label={`${resort.rating}/10`} 
                        sx={{ 
                          bgcolor: '#1976d2', 
                          color: 'white', 
                          fontWeight: 500 
                        }} 
                      />
                    </Box>

                    {/* Booking Details */}
                    <Box sx={{ 
                      bgcolor: '#1e293b', 
                      color: 'white', 
                      p: { xs: 2, md: 2.5 }, 
                      borderRadius: 1 
                    }}>
                      <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            {resort.date}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {resort.departure}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            from Amsterdam
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Bed size={16} />
                          <Typography variant="body2">Lodging</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Plane size={16} />
                          <Typography variant="body2">Transfer</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Price */}
                  <Box sx={{ 
                    textAlign: { xs: 'center', lg: 'right' }, 
                    ml: { lg: 3 } 
                  }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      €{resort.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      per person
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Pagination */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 1, 
        mt: 4 
      }}>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          ‹
        </Button>
        <Button variant="contained" size="small" sx={{ minWidth: 32, height: 32 }}>
          1
        </Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          2
        </Button>
        <Button variant="text" size="small" sx={{ minWidth: 32, height: 32 }}>
          ›
        </Button>
      </Box>
    </Box>
  )
}



