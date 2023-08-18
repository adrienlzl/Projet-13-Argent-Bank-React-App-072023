import React from "react";
import "./Logout.scss";
import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import {clearToken} from "../../Actions/token.action";

function Logout() {
    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        dispatch(clearToken());
    };
    return (
        <>
            <i className="fa fa-sign-out icone-logout"></i>
          <NavLink exact={true.toString()} to="/" className="logout-link"  onClick={handleLogoutClick}>Sing Out</NavLink>
        </>
    )
}
export default Logout