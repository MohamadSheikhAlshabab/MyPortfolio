import React from "react";

export default function Header2() {
    return (
        <div className="div-item">
            <header>
                <div className="logo">
                    <h3>&lt;devMohamad&gt;</h3>
                </div>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="index.html" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="index.html#services" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="index.html#about" className="nav__link">About me</a></li>
                        <li className="nav__item"><a href="index.html#work" className="nav__link">My Work</a></li>
                    </ul>
                </nav>
            </header>


            <section className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                <img src="img/portfolio-01.jpg" alt="" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                <img src="img/portfolio-details.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </div>



            <footer className="footer">

                <a href="mailto:alshabab.moh@gmail.com" className="footer__link">alshabab.moh@gmail.com</a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://codepen.io">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link" href="http://dribbble.com">
                            <i className="fab fa-dribbble"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}