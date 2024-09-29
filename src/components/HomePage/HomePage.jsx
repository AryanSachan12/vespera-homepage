import React from 'react'
import HeroSection from "./Herosection/heroSection"
import Events from './Events/Events'
import Header from './Other/Header'
import Faq from './Other/Faq'
import Footer from './Other/Footer'
import About from './Other/About'

const HomePage = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <About />
        <Events />
        <Faq />
        <Footer />
    </div>
  )
}

export default HomePage