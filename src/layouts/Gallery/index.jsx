import { useState, useLayoutEffect } from 'react'

import "./Gallery.css"

import Nails1 from "../../assets/images/nails1.jpg"
import Nails2 from "../../assets/images/nails2.jpg"
import Nails3 from "../../assets/images/nails3.jpg"
import Nails4 from "../../assets/images/nails4.jpg"
import Nails5 from "../../assets/images/nails5.jpg"
import Nails6 from "../../assets/images/nails6.jpg"
import Nails7 from "../../assets/images/nails7.jpg"
import Nails8 from "../../assets/images/nails8.jpg"
import Nails9 from "../../assets/images/nails9.jpg"

import Button from "../../components/button/Button"

const IMG_DATA = [
    {
        id: 1,
        imgSrc: Nails1,
        alt: "nails"
    },
    {
        id: 2,
        imgSrc: Nails2,
        alt: "nails"
    },
    {
        id: 3,
        imgSrc: Nails3,
        alt: "nails"
    }, {
        id: 4,
        imgSrc: Nails4,
        alt: "nails"
    }, {
        id: 5,
        imgSrc: Nails5,
        alt: "nails"
    },
    {
        id: 6,
        imgSrc: Nails6,
        alt: "nails"
    },
    {
        id: 7,
        imgSrc: Nails7,
        alt: "nails"
    },
    {
        id: 8,
        imgSrc: Nails8,
        alt: "nails"
    },
    {
        id: 9,
        imgSrc: Nails9,
        alt: "nails"
    },
]

const ImgItem = ({ imgSrc, alt }) => {
    return (
        <div className="gallery__imgs__imgWrapper">
            <img src={imgSrc} alt={alt} className="gallery__imgs__imgWrapper__img" />
        </div>
    )
}

export default function Gallery() {
    const [imgs, setImgs] = useState([])
    const [showImgs, setShowImgs] = useState(false)

    useLayoutEffect(() => {
        showImgs ? loadMoreImgs() : loadLessImgs()
    }, [showImgs])

    const loadLessImgs = () => {
        let newTab = []
        for (let i = 0; i < 6; i++) {
            newTab.push(IMG_DATA[i])
        }
        setImgs([...newTab])
    }

    const loadMoreImgs = () => {
        setImgs([...IMG_DATA])
    }

    const handleSetShowImgs = () => {
        setShowImgs(prevState => !prevState)
    }

    return (
        <div className="gallery" id="gallery">
            <div className="gallery__text">
                <p className="gallery__text__title">NASZA GALERIA</p>
            </div>
            <div className="gallery__imgs">
                {imgs.map(item => (
                    <ImgItem key={item.id} imgSrc={item.imgSrc} alt={item.alt} />
                ))}
            </div>
            <Button onClick={handleSetShowImgs} text={showImgs ? "mniej zdjęć" : "więcej zdjęć"} />
        </div>
    )
}
