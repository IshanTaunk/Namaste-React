import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const HeaderComponent = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogin=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    const {loggedInUser} = useContext(userContext);
    const isOnline = useOnlineStatus();
    const cartItems = useSelector((appStore)=>{return appStore.cart.itemsList});
    // console.log(cartItems,"cartItems");
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo">
                <img className="w-32" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {isOnline?"green":"red"} </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length} Items)</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={handleLogin}>{isLoggedIn ? "Logout":"Login"}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
    </div>
    )
};

export default HeaderComponent;