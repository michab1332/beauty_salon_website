import "./AboutSection.css"

import HairImg from "../../assets/images/hair.jpg"
import NailsImg from "../../assets/images/nails.jpg"

export default function AboutSection() {
    return (
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
                    <img src={HairImg} alt="Hair" className="about__imgs__imgWrapper__img" />
                </figure>
            </div>
        </div>
    )
}
