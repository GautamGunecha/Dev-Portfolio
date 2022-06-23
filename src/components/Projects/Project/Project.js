import React from "react";
import "../Projects.css";

const Project = ({ title, text, description, tech1, tech2, tech3, tech4, tech5, image, link }) =>
{
  return (
    <div className="personalProject">
      <div className="personalProjectContent">
        <span className="contentHeader">
          <h2>{title}</h2>
          <p>{text}</p>
        </span>
        <span className="contentParagraph">
          <p>
            {description}
          </p>
        </span>
        <span className="techStack">
          <p>Technologies</p>
          <span className="techStackButtons">
            {tech1 && <button>{tech1}</button>}
            {tech2 && <button>{tech2}</button>}
            {tech3 && <button>{tech3}</button>}
            {tech4 && <button>{tech4}</button>}
            {tech5 && <button>{tech5}</button>}
          </span>
        </span>
      </div>
      <div className="personalProjectImg">
        <a href={link}>
          {image && <img src={image} alt="" />}
        </a>
      </div>
    </div >
  );
};

export default Project;
