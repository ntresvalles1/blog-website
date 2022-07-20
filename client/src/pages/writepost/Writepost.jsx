import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./writepost.css"

export default function Writepost() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title, 
            description
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name; 
            data.append("name",filename);
            data.append("file",file);
            newPost.image = filename;
            
            try{
                await axios.post("/upload", data);
            }catch(err){
            }
        }
        try{
           const res = await axios.post("/posts", newPost);
           window.location.replace("/post/" + res.data._id); //redirect to different post url
        }catch(err){
        }
    };

  return (
    <div className="writepost">
        {file && 
            <img 
            className="writeImage"
            src={URL.createObjectURL(file)}
            alt=""
            />
        }
        
        <form className="writeform" onSubmit={handleSubmit}>
            <div className="writeformgroup">
                <label htmlFor="fileInput">
                    <i className="writeicon fas fa-plus"></i>                
                </label>
                {/* code below uploads image from write page into db and shows it on page */}
                <input type="file" id="fileInput" 
                        style={{display:"none"}} 
                        onChange={(e)=>setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" 
                        className="writeInput" 
                        autoFocus={true} 
                        onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="writeformgroup">
                <textarea 
                    placeholder="Tell your story!!" 
                    type="text"
                    className="writeInput writeText"
                    onChange={(e)=>setDescription(e.target.value)}>
                </textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}
