import React from "react";
import "src/pages/login/login.css"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login">
            <span className="loginTitle">Sign-in</span>
        <form className="loginForm">
            <label>Email: </label>
            <input type="text" className= "loginInput" placeholder="Enter email"></input>

            <label>Password: </label>
            <input type="password" className= "loginInput" placeholder="Enter password"></input>
            
            <button className="loginButton">Sign-in</button>
            
            <button className="registerButton">
                <Link to="/signup" style={{textDecoration: "none", color:"inherit"}}>Create Account</Link>
            </button>

        </form>
    
    </div>
  )
}
