import "./AboutSection.css"

import HairImg from "../../assets/images/hair.jpg"
import NailsImg from "../../assets/images/nails.jpg"
import SalonImg from "../../assets/images/salon.jpg"

export default function AboutSection() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__text">
                    <p className="about__text__title">
                        O NAS
                    </p>
                    <p className="about__text__desc">
                        Dbamy o wasz wygląd od ponad 5 lat, jesteśmy zaufanym i bardzo doświadczonym zespołem.
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
                    NASZ SALON
                </p>
                <p className="salon__desc">
                    Nasz salon ulokowany jest w łatwo dostępnym miejscu, łatwo trafisz do nas komunikacją miejską lub zaparkujesz samochodem na pobliskim parkingu.
                </p>
                <figure className="salon__imgWrapper">
                    <img src={SalonImg} alt="Hair" className="salon__imgWrapper__img" />
                </figure>
            </div>
        </>
    )
}
