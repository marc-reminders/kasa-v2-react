import React from "react";
import './style.scss'
import banner2 from './img/banner-about.svg'

function BannerAbout() {
    return (
        <section className="about__banner">
            <img className="about__banner__img" src={banner2} alt="banner-2"/>
        </section>
    )
}
export default BannerAbout
