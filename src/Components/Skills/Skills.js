import React from "react";
import "./Skill.css";
import webdev from "../../Images/web development.jpg";
import wildLifePhotography from "../../Images/wild life photography.jpg";
import videoEditing from "../../Images/video editing.jpg";

const Skills = () => {
  return (
    <div className="app__skill-section app_skill-bg section__padding standard__text-font">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          fontSize: "35px",
        }}
      >
        {" "}
        Skills I gathered So Far...
      </h1>
      <div className="all__skills-container">
        <div className="skill">
          <p>
            <img src={webdev} alt="" />
          </p>
          <h1>Web development</h1>
          <br />
          <p>
            <a href="https://github.com/RazuAhmad" target="_blank">
              <button className="custom_btn">View Details</button>
            </a>
          </p>
        </div>
        <div className="skill">
          <p>
            <img src={wildLifePhotography} alt="" />
          </p>

          <h1>Wild Life Photography</h1>
          <br />
          <p>
            <a
              href="https://www.flickr.com/photos/mohammedabdurrahman/"
              target="_blank"
            >
              <button className="custom_btn">View Details</button>
            </a>
          </p>
        </div>
        <div className="skill">
          <p>
            <img src={videoEditing} alt="" />
          </p>
          <h1>Video Editing</h1>
          <br />
          <p>
            <a
              href="https://www.youtube.com/channel/UCwa2g2Prwppgpp1huHzBUjQ"
              target="_blank"
            >
              <button className="custom_btn">View Details</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
