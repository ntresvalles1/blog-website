import React from "react";
import "./post.css";
import{Link} from "react-router-dom";


export default function Post({post}) {
  const PF = "http://localhost:4000/images/"; //makes images folder public (so images show up)
  return (
    <div className="post">
      {post.image && 
        <img
            className="postImage"
            src={PF + post.image}
            alt=" "
        /> } 

        <div className="postInf">
            <div className="postCategory">
              {post.category.map((c) => (
                <span className="postCategory">{c.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} style={{textDecoration: "none", color:"inherit"}}>
              <span className="postTitle">{post.title} </span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">{post.description}</p> 
    </div>
  )
} // takes information from db and renders it on page
