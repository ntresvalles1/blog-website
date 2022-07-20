import React from "react";
import "./login.css"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Login() {

  const usernameRef = useRef();
  const passRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    dispatch({type:"SIGNIN_START"});  //when click on button, it will call signin_start action (in reducer)
    try{
      const res = await axios.post("/authentication/signin", {
        username: usernameRef.current.value, 
        password: passRef.current.value,
      });
      dispatch({type:"SIGNIN_SUCCESS", payload: res.data});
    }catch(err){
      dispatch({type:"SIGNIN_FAILURE"});
    }
  };

  return (
    <div className="login">
            <span className="loginTitle">Sign-in</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" className= "loginInput" placeholder="Enter username" ref={usernameRef}></input>

            <label>Password: </label>
            <input type="password" className= "loginInput" placeholder="Enter password" ref={passRef}></input>
            
            <button className="loginButton" type="submit" disabled={isFetching}>Sign-in</button>
            
            <button className="registerButton">
                <Link to="/signup" style={{textDecoration: "none", color:"inherit"}}>Create Account</Link>
            </button>

        </form>
    
    </div>
  )
}
