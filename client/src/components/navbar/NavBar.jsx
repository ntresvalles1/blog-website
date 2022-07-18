import React from "react";
import "./navbar.css";
import{ BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";

export default function navbar() {
    const user = false;
  return (
    <div className='nav'>
        <div className="topleft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i class="topIcon fa-brands fa-facebook"></i>         
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">
                   <Link to="/" style={{textDecoration: "none", color:"inherit"}}>HOME</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/Writepost" style={{textDecoration: "none", color:"inherit"}}>ABOUT</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/Writepost" style={{textDecoration: "none", color:"inherit"}}>WRITE</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/Writepost" style={{textDecoration: "none", color:"inherit"}}>CONTACT</Link>
                </li>
                <li className="toplistitem">
                   {user && "LOG-OUT"}
                </li>
            </ul>
        </div>
        <div className="topright">
            {
                user ? (
                    <img className="topImage"
                    src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg"
                    alt=" "
                />
                ) : (
                    <ul className="toplist">
                        <li className="toplistitem">
                            <Link to="/signin" style={{textDecoration: "none", color:"inherit"}}>
                                SIGN-IN
                            </Link>
                        </li>
                        
                        <li className="toplistitem">
                            <Link to="/signup" style={{textDecoration: "none", color:"inherit"}}>
                                CREATE ACCOUNT
                            </Link>
                        </li>
                    </ul>
                )
            }
            
            <i class="topIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
