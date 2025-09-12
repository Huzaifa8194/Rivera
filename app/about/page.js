import StickyNavbar from "../components/StickyNavbar"
import Footer from "../components/Footer"
import AboutHeader from "./component/about-header"
import ContentSection from "./component/content-section"
import MissionVision from "./component/mission-vision"
import { Box } from "@mui/material"

export default function About() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <StickyNavbar />
      <AboutHeader />
      <ContentSection />
      <MissionVision />
      {/* Additional components will be added here */}
      <Footer />
    </Box>
  )
}
