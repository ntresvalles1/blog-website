import React from "react";
import "src/components/header/header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSmall"> React & Node </span>
            <span className="headerTitleLar">Blog</span>
        </div>
        <img 
            className="headerImage" 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt=" "
            />
    </div>
  )
}
