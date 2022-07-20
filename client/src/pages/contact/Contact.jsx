import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';

export default function Contact() {
    return(
        <div className="contactPage">
            <span className="contactTitle">Contact Us</span>
        <form className="contactForm" >
            <label>Username: </label>
            <input type="text" className= "contactInput" placeholder="Enter username" ></input>

            <label>Password: </label>
            <input type="password" className= "contactInput" placeholder="Enter password" ></input>
            
            <button className="contactButton" type="submit" >Sign-in</button>
            
            {/* <button className="Button">
                <Link to="/signup" style={{textDecoration: "none", color:"inherit"}}>Create Account</Link>
            </button> */}

        </form>
    
    </div>
    )
};
