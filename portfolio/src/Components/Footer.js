import React from "react";

export default function Footer (){
    return (
    <footer className="footer">
        <a href="mailto:alshabab.moh@gmail.com" className="footer__link">alshabab.moh@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="tel:+962785954916">
                <i class="fab fa-whatsapp"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://web.facebook.com/mohamad.s.alshabab/">
                <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com/AboAhmad12320">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/MohamadSheikhAlshabab">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>
    )
}