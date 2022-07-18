import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img
            className="postImage"
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            alt=" "
        />

        <div className="postInf">
            <div className="postCategory">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <span className="postTitle">
              Lorem ipsum, dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dicta, nostrum quam? Harum ipsam cumque distinctio atque suscipit 
          necessitatibus ullam nam laudantium autem esse deleniti tenetur, repudiandae officia 
          eveniet minus consectetur.
        </p>
    </div>
  )
}
