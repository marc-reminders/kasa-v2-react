import React from "react";
import './style.scss'
import {useNavigate} from "react-router";

export default function Error() {
    const navigate = useNavigate()
    const goHome = ()=>{
        navigate("/")
    }
    console.log(navigate);
    return (
        <section className="error">
            <div className="error__content">
                <h1 className="error__content__h1">404</h1>
                <p className="error__content__p">Oups! La page que vous demandez n'existe pas.</p>
                <a className="error__content__a" onClick={goHome}>Retourner sur la page d’accueil</a>
            </div>
        </section>
    )
}
