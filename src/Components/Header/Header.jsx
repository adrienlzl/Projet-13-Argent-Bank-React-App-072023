import React from 'react';
import "./Header.scss";
import {NavLink} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import logoArgentBanque from "./argentBankLogo.png"
import { connect } from 'react-redux';
import { useSelector } from "react-redux"
import Logout from "../Logout/Logout";
import userReducer from "../../Reducers/User.reducer";
export const mapStateToProps = (state) => ({
    isLoggedIn: !!state.tokenReducer,

});
function Header(props) {

    const userData = useSelector((state) => state.userReducer)


    return (
        <nav className="main-nav">
            <NavLink exact={true.toString()} to="/" className="main-nav-logo navlink">
                <img className="main-nav-logo-image" src={logoArgentBanque} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {props.isLoggedIn && userData && userData.firstName ? (
                    <div className="user-name-logout">
                        <i className="icone-header-user fa fa-user-circle"></i>
                        <NavLink exact={true.toString()} to="/User" className="main-nav-item navlink">{userData.firstName}
                        </NavLink>
                        <Logout>
                        </Logout>
                        </div>
                ) : (
                    <NavLink exact={true.toString()} to="/Sign" className="main-nav-item navlink">
                        <i className="icone-header-user fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
}

export default connect(mapStateToProps)(Header)