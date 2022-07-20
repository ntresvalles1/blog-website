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
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-facebook"></i>         
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
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
                <li className="toplistitem" onClick={handleLogout}>
                    {user && "LOG-OUT"}
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
