import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../postview/header";
import "../styles/form.css";
import axios from "axios";

const UserForm=()=>{
    const [img,setimg]=useState("");
    const [Author,setauthor]=useState("");
    const [Location,setloc]=useState("");
    const [Description,setdes]=useState("");
    
    const navigate=useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
         const formData = new FormData();
            formData.append('file',img)
            formData.append('Author',Author)
            formData.append('Location',Location)
            formData.append('Description',Description);	

            await axios('https://instaclone-backend-project.onrender.com/form',
            {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{console.log(data);}).catch((e)=>console.log(e))
       
        navigate('/postview',{ replace: true })
	}
    return(
        <>
            <Header/>
           <div className="form-container">
            <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
                
                <input type="file" name="file" accept='image/*' onChange={(e)=>{setimg(e.target.files[0])}} className="file"/> <br />
                <div className="auth">
                <input type="text" placeholder="Author" name="Author"  onChange={(e)=>{setauthor(e.target.value)}}/> 
                <input type="text" placeholder="Location" name="Location" onChange={(e)=>{setloc(e.target.value)}}/>
                </div> 
               <textarea name="Description" placeholder="Description" cols="30" rows="5" onChange={(e)=>{setdes(e.target.value)}} className="Desc"></textarea> <br/>
               <button type="submit" className="button">Post</button>
            </form>
            </div>
            
        </>
    )
}
export default UserForm;