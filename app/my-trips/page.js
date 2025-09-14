import StickyNavbar from "../components/StickyNavbar"
import Footer from "../components/Footer"
import { Box, Container } from "@mui/material"
import { TripsLayout } from "./components/trips-layout"

export default function MyTripsPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <StickyNavbar />
      <Container maxWidth="lg" sx={{ py: 3, px: 2, mt: { xs: 10, md: 12 } }}>
        <TripsLayout />
      </Container>
      <Footer />
    </Box>
  )
}


