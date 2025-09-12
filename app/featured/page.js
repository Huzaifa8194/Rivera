import StickyNavbar from "../components/StickyNavbar"
import Footer from "../components/Footer"
import { SearchHeader } from "./component/search-header"
import { FilterSidebar } from "./component/filter-sidebar"
import { SearchResults } from "./component/search-results"
import { Box, Container } from "@mui/material"

export default function Featured() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <StickyNavbar />
      <SearchHeader />
      <Container maxWidth="lg" sx={{ py: 3, px: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
          <FilterSidebar />
          <SearchResults />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
