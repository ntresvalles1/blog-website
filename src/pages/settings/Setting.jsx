import React from "react";
import "./setting.css"
import SideBar from "../../components/sidebar/Sidebar";


export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrap">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>

            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingProfilePic">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6IWN0_LFCO0BKoRSAFXW53Iyno9LoTPZYg3QspzMR9V-cHobkBeNRgbSPAckMBKHpaM&usqp=CAU" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingProfileIcon fa-solid fa-circle-user"></i>
                    </label>

                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                    
                    <label>Username</label>
                    <input type="text" placeholder="Nicole"></input>
                    <label>Email</label>
                    <input type="email" placeholder="@yahoo.com"></input>
                    <label>Password</label>
                    <input type="password"></input>

                    <button className="settingSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
