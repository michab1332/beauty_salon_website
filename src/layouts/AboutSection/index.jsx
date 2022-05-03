import "./AboutSection.css"

import HairImg from "../../assets/images/hair.jpg"
import NailsImg from "../../assets/images/nails.jpg"
import SalonImg from "../../assets/images/salon.jpg"

export default function AboutSection() {
    return (
        <>
            <div className="about">
                <div className="about__text">
                    <p className="about__text__title">
                        ABOUT US
                    </p>
                    <p className="about__text__desc">
                        Feel as a super star everyday, with your own look and style. Feel as a super star everyday, with your own look.
                    </p>
                </div>
                <div className="about__imgs">
                    <figure className="about__imgs__imgWrapper">
                        <img src={HairImg} alt="Hair" className="about__imgs__imgWrapper__img" />
                    </figure>
                    <figure className="about__imgs__imgWrapper">
                        <img src={NailsImg} alt="Hair" className="about__imgs__imgWrapper__img" />
                    </figure>
                </div>
            </div>
            <div className="salon">
                <p className="salon__title">
                    OUR SALON
                </p>
                <p className="salon__desc">
                    Feel as a super star everyday, with your own look and style. Feel as a super star everyday, with your own look.
                </p>
                <figure className="salon__imgWrapper">
                    <img src={SalonImg} alt="Hair" className="salon__imgWrapper__img" />
                </figure>
            </div>
        </>
    )
}
