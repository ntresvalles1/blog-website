import React from "react";
import "src/pages/home/home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";


export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
          <Posts/>
          <Sidebar/> 
      </div>
    </>
  )
}
