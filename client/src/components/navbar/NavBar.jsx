import React, { useContext } from "react";
import "./navbar.css";
import{ BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import { Context } from "../../context/Context";

export default function Navbar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:4000/images/";

    const handleLogout = () => {
        dispatch({type: "SIGNOUT"});
    };

    return (
    <div className='nav'>
        <div className="topleft">
            <a href="https://www.instagram.com/sdsccsmith/">
                <i className="topIcon fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/sdscc.smith">
                <i className="topIcon fa-brands fa-facebook"></i>  
            </a>       
            <a href="https://app.slack.com/client/T011W6JNT3J">
                <i className="topIcon fa-brands fa-slack"></i>
            </a>
            <a href="https://dashboard.mailerlite.com/forms/67682/57194423704881009/share">
                <i className="topIcon fa-solid fa-envelope"></i>
            </a>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">
                   <Link to="/" style={{textDecoration: "none", color:"inherit"}}>HOME</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/About" style={{textDecoration: "none", color:"inherit"}}>ABOUT</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/Writepost" style={{textDecoration: "none", color:"inherit"}}>WRITE</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/Contact" style={{textDecoration: "none", color:"inherit"}}>CONTACT</Link>
                </li>
                <li className="toplistitem" onClick={handleLogout}>
                    <Link to="/" style={{textDecoration: "none", color:"inherit"}}>{user && "LOG-OUT"}</Link>
                </li>
            </ul>
        </div>
        <div className="topright">
            
            {
                user ? (
                    <Link to="/settings">
                        <img className="topImage"
                        src={ PF + user.profilePicture}
                        alt=" "
                        />
                </Link>
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
            
            <i className="topIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
