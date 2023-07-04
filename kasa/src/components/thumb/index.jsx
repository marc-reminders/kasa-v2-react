import React from "react";
import './style.scss'
import {Link} from "react-router-dom";

export default function Thumb({link, cover, title}) {

    return (
        <Link className="thumb" to={link}>
            <article className="thumb__content">
                <img src={cover} alt={title} />
                <h2>{title}</h2>
            </article>
        </Link>
    )
}
