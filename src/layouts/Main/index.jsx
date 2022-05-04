import React from 'react'

import Menu from '../Menu'
import HeroPage from '../HeroPage'
import BreakSection from '../BreakSection'
import AboutSection from '../AboutSection'
import TeamSection from '../TeamSection'
import Gallery from '../Gallery'
import ContactSection from '../ContactSection'
import Footer from '../Footer'

export default function Main() {
    return (
        <>
            <Menu />
            <HeroPage />
            <BreakSection text="WELCOME TO KAJA BONOWICZ HAIR & BEAUTY SALON" />
            <AboutSection />
            <BreakSection text="OUR SALON IS LOCATED ON THE STREET ZABIENIEC15b/19" />
            <TeamSection />
            <Gallery />
            <ContactSection />
            <Footer />
        </>
    )
}
