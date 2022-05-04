import "./ContactSection.css"

import ContactPhoto from "../../assets/images/contact.jpg"

export default function ContactSection() {
    return (
        <>
            <div className="contact">
                <div className="contact__text">
                    <p className="contact__text__title">SKONTAKTUJ SIĘ Z NAMI PRZEZ</p>
                    <p className="contact__text__social"><a href="https://www.facebook.com/kaja.bonowicz" target="blank">Facebook</a></p>
                    <p className="contact__text__social"><a href="https://www.instagram.com/kaja.bonowicz" target="blank">Instagram</a></p>
                </div>
                <div className="contact__imgWrapper">
                    <img src={ContactPhoto} alt="contact" className="contact__imgWrapper__img" />
                </div>
            </div>
            <p className="contact__place">OUR SALON IS LOCATED ON THE STREET ZABIENIEC15b/19 IN ALEKSANDROW KUJ.</p>
        </>
    )
}
