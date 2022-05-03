import React from 'react'

import heroImage from '../../assets/images/hero_image.png'
import './HeroPage.css'

export default function HeroPage() {
    return (
        <div className='heroPage'>
            <div className="heroPage__image">
                <img src={heroImage} alt="Hero" className="heroPage__image__img" />
            </div>
            <section className="heroPage__content">
                <h1 className="heroPage__content__title">LOOK AMAZING AND FEEL AS FAB AS EVER</h1>
                <h1 className="heroPage__content__text">Feel as a super star everyday, with your own look and style</h1>
            </section>
        </div>
    )
}
