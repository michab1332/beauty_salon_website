import { useState, useLayoutEffect } from 'react'

import "./Gallery.css"

import Photo from "../../assets/images/nails.jpg"

import Button from "../../components/button/Button"

const IMG_DATA = [
    {
        id: 1,
        imgSrc: Photo,
        alt: "nails"
    },
    {
        id: 2,
        imgSrc: Photo,
        alt: "nails"
    },
    {
        id: 3,
        imgSrc: Photo,
        alt: "nails"
    }, {
        id: 4,
        imgSrc: Photo,
        alt: "nails"
    }, {
        id: 5,
        imgSrc: Photo,
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
        for (let i = 0; i < 3; i++) {
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
        <div className="gallery">
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
