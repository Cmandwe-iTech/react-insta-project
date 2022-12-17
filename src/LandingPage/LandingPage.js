import React from "react";
import { Link } from "react-router-dom"
import landingImage from '../Images/landingImage.jpg'
import './LandingPage.css'
// import Application from "../Images/abc";
const LandingPage = () => {
    return (
        <>
            <div className="Home">
                <div className="image">
                {/* <img src={require("../Images/landingImage.jpg")} alt="homepage"/> */}
            
                <img src={landingImage} alt="1" className="img"/>
                
                </div>
                <div>
                <div ><h1 id="Wlcm">Welcome To InstaClone</h1></div>
                <div>
                    <Link to="/postview"><button className="enter">Enter</button></Link>
                </div>
                </div>
                
            </div>

        </>
    )
}
export default LandingPage