import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"
import { useLocation } from "react-router-dom";


export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/authentication/signup", {
        username, 
        email, 
        password,
      });
      res.data && window.location.replace("/signin");
    }catch(err){
      setError(true);
    }
  }; // handles submit in signup page

  return (
    <div className="register">
            <span className="registerTitle">Create Account</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" className= "registerInput" 
                  placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>

            <label>Email: </label>
            <input type="text" className= "registerInput" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}></input>

            <label>Password: </label>
            <input type="password" className= "registerInput" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}></input>
            
            <button className="regButton" type="submit">Create Account</button>
            
            <button className="regLoginButton">
                <Link to="/signin" style={{textDecoration: "none", color:"inherit"}}>Sign-in</Link>
            </button>
          
            {error && <span style={{marginTop:"15px"}}>Something went wrong. Please try again.</span>} 
            {/* shows when there is an error in signup */}
        </form>
    
    </div>
  )
}
