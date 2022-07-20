import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSmall"> Smithies in SDS </span>
            <span className="headerTitleLar"> Coalition of Color</span>
        </div>
        <img 
            className="headerImage" 
            src="https://wallpaperaccess.com/full/2335246.png"
            alt=" "
            />
    </div>
  )
}
