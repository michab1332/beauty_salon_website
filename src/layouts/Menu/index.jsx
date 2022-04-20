import './Menu.css'

import Button from '../../components/button/Button'

import logo from "../../assets/svg/logo.svg"

export default function Menu() {
    return (
        <header className='menu'>
            <img src={logo} alt="logo" className="menu__logo" />
            <div className="menu__navWrapper">
                <nav className="menu__nav">
                    <ul className="menu__nav__ul">
                        <li className="menu__nav__ul__li">
                            <a href="#home">Home</a>
                        </li>
                        <li className="menu__nav__ul__li">
                            <a href="#about">About</a>
                        </li>
                        <li className="menu__nav__ul__li">
                            <a href="#services">Services</a>
                        </li>
                        <li className="menu__nav__ul__li">
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className="menu__nav__ul__li">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <Button>Book now</Button>
            </div>
        </header>
    )
}
