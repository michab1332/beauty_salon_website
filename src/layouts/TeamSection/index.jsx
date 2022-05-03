import TeamItem from "./TeamItem"

import "./TeamSection.css"

import KajaImg from "../../assets/images/kaja.jpg"

export default function TeamSection() {
    return (
        <>
            <div className="team__texts">
                <p className="salon__title">
                    THE TEAM
                </p>
                <p className="salon__desc">
                    Feel as a super star everyday, with your own look and style. Feel as a super star everyday, with your own look.
                </p>
            </div>
            <div className="team">
                <TeamItem imgSrc={KajaImg} name="Kaja" desc="od kilku lat zajmuję się profesjonalnie paznokciami. " />
                <TeamItem imgSrc={KajaImg} name="Kaja" desc="od kilku lat zajmuję się profesjonalnie paznokciami. " />
                <TeamItem imgSrc={KajaImg} name="Kaja" desc="od kilku lat zajmuję się profesjonalnie paznokciami. " />
            </div>
        </>
    )
}
