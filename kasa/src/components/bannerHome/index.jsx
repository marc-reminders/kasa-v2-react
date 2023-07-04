import React from "react";
import './style.scss'
import banner1 from './img/banner-home.svg'

export default function BannerHome() {
    return (
        <section className="banner__home">
            <img src={banner1} alt="banner-home"/>
                <h1 className="banner__home__title">Chez vous, partout et ailleurs</h1>
        </section>
    )
}

