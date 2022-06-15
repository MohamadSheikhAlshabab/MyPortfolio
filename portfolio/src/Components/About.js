import React from "react";
import meImg from "../images/MyImg.jpg"

export default function About(){
    return (
        <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based out of Amman</p>
        
        <div className="about-me__body">
            <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of soccer, outdoor activities, TV series and English literature. A family person and husband</p>
            <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        </div>
        
        <img src={meImg} alt="Mohamad Sheikh Alshabab" className="about-me__img"/>
     </section>
    )
}