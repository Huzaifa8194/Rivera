"use client"

import { useState, useEffect } from "react"
import Header from "../components/TransparentNavbar"
import StickyNavbar from "../components/StickyNavbar"
import HeroSection from "./component/herosection"
import TopPicks from "./component/top-picks"
import PlanVacation from "./component/plan-vacation"
import WhyBookWithUs from "./component/why-book-us"
import Footer from "../components/Footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0) // Show sticky header as soon as user scrolls
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Transparent header for hero section */}
      {!isScrolled && <Header />}
      
      {/* Sticky white header when scrolled */}
      {isScrolled && <StickyNavbar />}
      
      <HeroSection />
      <TopPicks/>
      <PlanVacation/>
      <WhyBookWithUs/>
      <Footer/>
    </div>
  )
}