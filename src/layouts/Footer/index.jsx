import "./Footer.css"

import Logo from "../../assets/svg/logo.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="logo" className="footer__logo" />
        </footer>
    )
}
