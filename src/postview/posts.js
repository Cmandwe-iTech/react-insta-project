import React, { useEffect, useState } from "react";
import ThreeDot from "../Images/threeDot.png";
import Likes from "../Images/likes.png";
import Share from "../Images/share.png";
import "../styles/post.css";
// import axios from "axios";

const Posts = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://instagram-3slu.onrender.com/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userData);
  return (
    <>
      {userData.map((items, i) => {
        return (
          <div id="main-container" key={i}>
            <div className="post-header">
              <span className="name-location">
                <h3>{items.Author}</h3>
                <p>{items.Location}</p>
              </span>
              <span className="three-dot">
                <img
                  src={ThreeDot}
                  alt="more-options"
                  className="more-options"
                />
              </span>
            </div>
            <div>
              <img src={items.file} alt="postimage" className="postImage" />
            </div>
            <div>
              <span>
                <img src={Likes} alt="likes" />
              </span>
              <span>
                <img src={Share} alt="share" />
              </span>
            </div>
            <div>
              <span>
                <p>{items.Likes}</p>
              </span>
              <span>
                <h5 id="date">{items.Date.split("T")[0]} {items.Date.split("T")[1].split(".")[0]}</h5>
              </span>
            </div>
            <div>
              <h4>{items.Description}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Posts;
