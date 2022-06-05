import React from "react";
import "./AboutMe.css";
import aboutMeData from "../data/aboutme.json";
import GautamGunecha from "../assets/gautamgunecha.jpeg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1>{aboutMeData.aboutMe.title}</h1>
      <div className="aboutMeSection">
        <div className="aboutMeImg">
          <img src={GautamGunecha} alt="" />
        </div>
        <div className="aboutMeContent">
          <p>{aboutMeData.aboutMe.paragraph01}</p>
          <p>{aboutMeData.aboutMe.paragraph02}</p>
          <button>{aboutMeData.aboutMe.button}</button>
        </div>
      </div>
      {/* Mobile View */}
      <div className="aboutMeSectionMobile">
        <div className="aboutMeImgMobile">
          <img src={GautamGunecha} alt="" />
        </div>
        <div className="aboutMeContentMobile">
          <p>{aboutMeData.aboutMe.paragraph01}</p>
          <p>{aboutMeData.aboutMe.paragraph02}</p>
          <button>{aboutMeData.aboutMe.button}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
