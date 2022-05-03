import React from 'react'

import Menu from '../Menu'
import HeroPage from '../HeroPage'
import BreakSection from '../BreakSection'
import AboutSection from '../AboutSection'
import TeamSection from '../TeamSection'

export default function Main() {
    return (
        <>
            <Menu />
            <HeroPage />
            <BreakSection text="WELCOME TO KAJA BONOWICZ HAIR & BEAUTY SALON" />
            <AboutSection />
            <BreakSection text="OUR SALON IS LOCATED ON THE STREET ZABIENIEC15b/19" />
            <TeamSection />
        </>
    )
}
