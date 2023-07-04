import React from "react";
import './style.scss'
import {Link, NavLink, Outlet} from "react-router-dom";
import logo from '../../asset/LOGO.svg'

export default function Header() {
    return (
        <header>
            <nav className="header__navbar">
                <div className="header__navbar__bloc-left">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="header__navbar__bloc-right">
                    <NavLink className={({isActive}) => isActive ? 'active' : 'link'} to="/">Accueil</NavLink>

                    <NavLink className={({isActive}) => isActive ? 'active' : 'link'} to="about">A
                        propos
                    </NavLink>
                </div>
            </nav>
            <Outlet/>
        </header>
    )
}

