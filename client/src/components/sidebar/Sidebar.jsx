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
                {/* <li className="sidelistItem">Trips</li>
                <li className="sidelistItem">Favorites</li>
                <li className="sidelistItem">Life</li>
                <li className="sidelistItem">Music</li> */}
            </ul>
        </div>
       
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sideIcon fa-brands fa-instagram"></i>
                <i className="sideIcon fa-brands fa-facebook"></i>         
                <i className="sideIcon fa-brands fa-twitter"></i>
                <i className="sideIcon fa-brands fa-pinterest"></i>
            </div>
        </div>

    </div>
  )
}
