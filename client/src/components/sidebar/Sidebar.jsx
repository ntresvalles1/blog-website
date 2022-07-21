import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import seniors21 from './seniors21.jpeg';


export default function Sidebar() {
    const [cat,setCategory] = useState([]);
    
    useEffect(()=> {
        const getCategory = async () =>
        {
            const res = await axios.get("/category")
            setCategory(res.data)
        }
        getCategory();
    },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">SPOTLIGHT</span>
            <img 
                className="sideBarImage" 
                src={seniors21}
                alt=" "
            />
            <p className="sideBarDesc">
                Congratulations to all our SDSCC seniors!! We're so proud of all of you 
                and can't wait to see where the future takes you.
            </p>
        </div>
        
        <div className="sidebarItem"> 
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cat.map((c) => (
                    <Link to={`/?cat=${c.name}`} style={{textDecoration: "none", color:"inherit"}}>
                        <li className="sidelistItem">{c.name}</li>
                    </Link> 
                ))}
            </ul>
        </div>
       
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
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
        </div>

    </div>
  )
}
