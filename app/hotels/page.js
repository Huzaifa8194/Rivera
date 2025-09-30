"use client"

import StickyNavbar from "../components/StickyNavbar"
import Footer from "../components/Footer"
import { SearchHeader } from "./component/search-header"
import { FilterSidebar } from "./component/filter-sidebar"
import { SearchResults } from "./component/search-results"
import { Box, Container, Tabs, Tab } from "@mui/material"
import { useState } from "react"

export default function Hotels() {
  const [tab, setTab] = useState(0)
  const [request, setRequest] = useState(null)

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <StickyNavbar />
      <SearchHeader onRequestChange={(req) => setRequest(req)} />
      <Container maxWidth="lg" sx={{ py: 3, px: 2 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
          <Tab label="Region" />
          <Tab label="Search by Name" />
        </Tabs>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
          <FilterSidebar />
          <SearchResults request={request} />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}


