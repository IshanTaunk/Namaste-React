import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const HeaderComponent = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const handleLogin=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    const {loggedInUser} = useContext(userContext);
    const isOnline = useOnlineStatus();
    return (
    <div className="header">
            <div className="logo">
                <img className="img-logo" src={LOGO_URL} />
            </div>
            <div className="nav-section">
                <ul>
                    <li>Online Status: {isOnline?"green":"red"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={handleLogin}>{isLoggedIn ? "Logout":"Login"}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
    </div>
    )
};

export default HeaderComponent;