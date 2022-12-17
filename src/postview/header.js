import React from "react";
import instaicon from '../Images/instaIcon.png'
import camIcon from '../Images/camIcon.png'
import  '../styles/header.css'
import {Link} from "react-router-dom"

const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="insta">
            <img src={instaicon} alt="instaIcon" className="icon-img"/>
            <h1 className="insta-header">Instaclone</h1>
            </div>
            <div>
       <Link to="/form"><img src={camIcon} alt="camIcon" className="cam-icon"/></Link>     
            </div>
       </div>

        </>
    )
}
export default Header