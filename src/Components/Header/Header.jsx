import React from 'react';
import "./Header.scss";
import {NavLink} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import logoArgentBanque from "./argentBankLogo.png"


function Header() {


    return (
        <nav className="main-nav">
            <NavLink  exact={true.toString()} to="/" className="main-nav-logo navlink">
                <img className="main-nav-logo-image" src={logoArgentBanque} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink  exact={true.toString()} to="/Sign" className="main-nav-item navlink">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}

export default Header