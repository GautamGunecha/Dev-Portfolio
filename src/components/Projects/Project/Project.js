import React from "react";
import "../Projects.css";
import Portfolio from "../../assets/Portfolio.png";

const Project = () => {
  return (
    <div className="personalProject">
      <div className="personalProjectContent">
        <span className="contentHeader">
          <h2>1. Developer Portfolio</h2>
          <p>Personal Portfolio</p>
        </span>
        <span className="contentParagraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            voluptas eaque placeat voluptatibus consectetur sit qui sunt
            repellat recusandae explicabo, consequatur, iure ducimus. Id nam
            error, sequi pariatur nostrum non?
          </p>
        </span>
        <span className="techStack">
          <p>Technologies</p>
          <span className="techStackButtons">
            <button>MongoDB</button>
            <button>NodeJs</button>
            <button>ExpressJs</button>
            <button>React</button>
          </span>
        </span>
      </div>
      <div className="personalProjectImg">
        <img src={Portfolio} alt="" />
      </div>
    </div>
  );
};

export default Project;
