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

            <label>Concern: </label>
            <input type="password" className= "contactInput" placeholder="Enter password" ></input>
            
            <button className="contactButton" type="submit" >Send Email</button>
        </form>
    </div>
    )
};
