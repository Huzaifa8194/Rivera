"use client"

import { Box } from "@mui/material"
import { TripsSidebar } from "./trips-sidebar"
import { TripsResults } from "./trips-results"
import { TripsHeaderInline } from "./trips-header-inline"

export function TripsLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
      <TripsSidebar />
      <Box sx={{ flex: 1 }}>
        <TripsHeaderInline />
        <TripsResults />
      </Box>
    </Box>
  )
}


