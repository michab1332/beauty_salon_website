import React from 'react'

import heroImage from '../../assets/images/hero_image.png'
import './HeroPage.css'

export default function HeroPage() {
    return (
        <div className='heroPage' id="home">
            <div className="heroPage__image">
                <img src={heroImage} alt="Hero" className="heroPage__image__img" />
            </div>
            <section className="heroPage__content">
                <h1 className="heroPage__content__title">WYGLĄDAJ NIESAMOWICIE I POCZUJ SIĘ WYJĄTKOWO</h1>
                <h1 className="heroPage__content__text">Po wyjściu z naszego salonu poczujesz się jak gwiazda</h1>
            </section>
        </div>
    )
}
