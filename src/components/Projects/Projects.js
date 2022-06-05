import React from "react";
import Project from "./Project/Project";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectComponent">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
