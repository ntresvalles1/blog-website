import React from "react";
import "./setting.css"
import SideBar from "../../components/sidebar/Sidebar";
import { useContext, useState} from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Setting() {
    const {user , dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:4000/images/";


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username, 
            email,
            password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name; 
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePicture = filename;
            
            try{
                await axios.post("/upload", data);
            }catch(err){}
        }
        try{
           const res = await axios.put("/users/" + user._id, updatedUser);
           setSuccess(true);
           dispatch({type: "UPDATE_SUCCESS", payload:res.data})
        }catch(err){
            dispatch({type: "UPDATE_FAILURE"})
        }
    };


  return (
    <div className="setting">
        <div className="settingWrap">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>

            <form className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingProfilePic">
                    <img 
                        src={file ? URL.createObjectURL(file) : PF + user.profilePicture} 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingProfileIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" 
                        style={{display:"none"}} 
                        onChange={(e)=>setFile(e.target.files[0])}/>

                </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}></input>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>

                    <button className="settingSubmit" type="submit">Update</button>
                    {success && <span style={{color: "purple", textAlign:"center", marginTop:"20px"}}>Profile sucessfully updated.</span>}
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
