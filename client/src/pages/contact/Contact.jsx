import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';

export default function Contact() {
    return(
        <div className="contactPage">
            <span className="contactTitle">Contact Us</span>
            <span className='contactSmTxt'> We value everyone's opinions and want to make SDSCC members' experience the best it can be. </span>
            <span className='contactSmTxt'> So, if you have any concerns, ideas, or questions, please fill out the form below! 
                This form is anonymous. </span>
        <form className="contactForm" >
            <label>Username: </label>
            <input type="text" className= "contactUserInput" placeholder="Enter username" ></input>

            <label>Concern: </label>
            <input type="password" className= "contactDescInput" placeholder="Enter your concern, question, or ideas" ></input>
            
            <button className="contactButton" type="submit">Send Email</button>
        </form>
    </div>
    )
};
