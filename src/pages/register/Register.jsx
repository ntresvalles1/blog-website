import React from "react";
import "./register.css"

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Create an Account</span>
    <form className="registerForm">
        <label>Username: </label>
        <input 
            type="password" 
            className= "registerInput" 
            placeholder="Enter username">
        </input>

        <label>Email: </label>
        <input 
            type="text" 
            className= "registerInput" 
            placeholder="Enter email">
        </input>

        <label>Password: </label>
        <input 
            type="password" 
            className= "registerInput" 
            placeholder="Enter password">
        </input>


        
        <button className="registerButton">Create Account</button>

    </form>
        <button className="regLoginButton">Sign in</button>
    </div>
  )
}
