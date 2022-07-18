import React from "react";
import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return (
    <div className="register">
            <span className="registerTitle">Create Account</span>
        <form className="registerForm">
            <label>Username: </label>
            <input type="text" className= "registerInput" placeholder="Enter username"/>

            <label>Email: </label>
            <input type="text" className= "registerInput" placeholder="Enter email"></input>

            <label>Password: </label>
            <input type="password" className= "registerInput" placeholder="Enter password"></input>
            
            <button className="regButton">Create Account</button>
            
            <button className="regLoginButton">
                <Link to="/signin" style={{textDecoration: "none", color:"inherit"}}>Sign-in</Link>
            </button>

        </form>
    
    </div>
  )
}
