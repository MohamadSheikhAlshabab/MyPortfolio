import React from "react"
import logo from "../images/logo.jpg"
export default function Header() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link')

    // let open= navToggle.addEventListener('click', () => {
    //     document.body.classList.toggle('nav-open');
    // });

    // let close = navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         document.body.classList.remove('nav-open');
    //     })
    // })

    const [navbarOpen, setNavbarOpen] = React.useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <header>
            <div className="logo">
                <h3>&lt;SheikhAlshabab/&gt;</h3>
                {/* <img src={logo} alt="my logo"/> */}
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={handleToggle}>
                <span className="hamburger"></span>{navbarOpen ? "close" :"open"}
            </button>
            <nav className="nav">
                <ul className={`nav__list menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li className="nav__item"><a href="#home" className="nav__link" onClick={() => closeMenu()}>Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link" onClick={() => closeMenu()} >My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link" onClick={() => closeMenu()}>About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link" onClick={() => closeMenu()}>My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}