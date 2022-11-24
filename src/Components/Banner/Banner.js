import React from "react";
import "./Banner.css";
import abdurRahmanRazu from "../../Images/Abdur Rahman Razu.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="app__banner-container section__padding navbar-Logo-title">
      <div className="app__banner-text">
        <h1 className="hi-there"> Hi There,</h1>

        <p className="type-writer">
          <Typewriter
            options={{
              strings: ["This is", "Abdur Rahman"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <br />
        <p>A Law Student at Jagannath University</p>
        <br />
        <button className="custom_btn">View Details</button>
      </div>
      <div className="app__banner-img">
        <img src={abdurRahmanRazu} alt="" />
      </div>
    </div>
  );
};

export default Banner;
