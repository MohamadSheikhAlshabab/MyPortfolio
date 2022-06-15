import React from "react"
import meImg from "../images/profile-pic.png"

export default function Intro(){
    return (
        <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Mohamad Alshabab</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">fullstack dev</p>
        <img src={meImg} alt="of Mohamad  Sheikh Alshabab" className="intro__img"/>
    </section>
    )
}