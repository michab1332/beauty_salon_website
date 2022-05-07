import TeamItem from "./TeamItem"

import "./TeamSection.css"

import KajaImg from "../../assets/images/kaja.jpg"

export default function TeamSection() {
    return (
        <>
            <div className="team__texts" id="team">
                <p className="salon__title">
                    NASZA EKIPA
                </p>
                <p className="salon__desc">
                    W naszym salonie pracują sami zaufani ludzie z ogromnym doświadczeniem.
                </p>
            </div>
            <div className="team">
                <TeamItem imgSrc={KajaImg} name="Kaja" desc="od kilku lat zajmuję się profesjonalnie paznokciami. " />
                <TeamItem imgSrc={KajaImg} name="Julia" desc="jej całe życie to włosy, profesjonalnie pracuje z nimi 5lat. " />
                <TeamItem imgSrc={KajaImg} name="Agata" desc="" />
            </div>
        </>
    )
}
