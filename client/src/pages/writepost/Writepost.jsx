import React from "react";
import "./writepost.css"

export default function Writepost() {
  return (
    <div className="writepost">
        <img 
            className="writeImage"
            src="https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg"
            alt=""
        />
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileInput">
                    <i class="writeicon fas fa-plus"></i>                
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea 
                    placeholder="Tell your story!!" 
                    type="text"
                    className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
