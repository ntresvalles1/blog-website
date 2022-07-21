import React, { useEffect, useState } from "react";
import "./singlePost.css"
import { useLocation } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom";
import { useContext} from "react";
import { Context } from "../../context/Context";


export default function SinglePost() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]); //finds the path to post
    const [post, setPost] = useState({}) //original state is empty object b/c we don't have any
    const PF = "http://localhost:4000/images/"; //makes images folder public (so images show up)
    const {user} = useContext(Context);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [updatePage, setUpdatePage] = useState(false)
    const [image, setImage] = useState("")



    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost()
    },[path]);

    const handleDelete = async() => {
       try{
            await axios.delete(`/posts/${post._id}`,{
                data: {username:user.username}});
            window.location.replace("/");
       }catch(err){
       }
    } // deletes post if user is signed in

    const handleUpdate = async() => {
        try{
            await axios.put(`/posts/${post._id}`,{
               username:user.username, title, description, category, });
            window.location.reload("/");
       }catch(err){
       }
    } // updates post  if user is signed in

  return (
    <div className="singlePost"> 
        <div className="singlePostwrap">
            {post.image && (
                <img src={PF + post.image} 
                alt="" 
                className="singlePostImage" />
            )}
                { updatePage ? <input 
                        type = "text" 
                        value = {title} 
                        className="singlePostTitleInput" 
                        autoFocus
                        onChange={(e)=> setTitle(e.target.value)}
                    /> : (
                    <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostedit">
                            <i className="singlePostIcon far fa-edit" onClick={() => setUpdatePage(true)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    )} 
                    {/* ? looks to see if there is a user */}
                </h1>
                )
            }
            <div className="singlePostInf">
                <span className="singlePostAuthor">Author: 
                    <Link to={`/?user=${post.username}`} style={{textDecoration: "none", color:"inherit"}}>
                        <b> {post.username}</b>
                    </Link> 
                </span>
                {/* makes user to link --> leads to only user's posts */}
                <span className="Date">Date: <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            {updatePage ? <textarea 
                    className="singlePostCategoryInput" 
                    value={category} 
                    placeholder= "Enter Category"
                    onChange={(e)=> setCategory(e.target.value)}/> : (
                <p className="singlePostCategory">{category}</p>
            )}
            {updatePage ? <textarea 
                    className="singlePostDescriptionInput" 
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)}/> : (
                <p className="singlePostDescription">{description}</p>
            )}
            {updatePage && (
                <button className="singlePostButton" onClick={handleUpdate}>Update Post</button>
            )}
        </div>
    </div>
  )
}
