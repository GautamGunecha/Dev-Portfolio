import React from "react";
import Project from "./Project/Project";
import "./Projects.css";
import Portfolio from "../assets/Portfolio.png";
import liveChat from "../assets/liveChat.png";


const Projects = () =>
{
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectComponent">
        <Project
          title={"1. Developer Portfolio."}
          text={"Personal Portfolio."}
          image={Portfolio}
          description={"Developer portfolio build using ReactJs with reusable components."}
          tech1={"ReactJs"}
          tech2={"HTML5"}
          tech3={"CSS3"}
          link="/"
        />
        <Project
          title={"2. Live chat web appilcation."}
          text={"Personal Portfolio."}
          image={liveChat}
          link="https://mernlivechat.netlify.app"
          description={"MERN Stack web application that support live chats and room chats, with features like create chat room, add users, remove users and group admin functionality. ReactJs is used to developed frontend of an application. For backend I've used MongoDB for database storage, Express and Nodejs is been used to create apis route that connects frontend part of an application with backend and database. Socket.io is been used to setup live chat feature."}
          tech1={"MongoDB"}
          tech2={"ExpressJs"}
          tech3={"NodeJs"}
          tech4={"ReactJs"}
          tech5={"Socket.io"}
        />
      </div>
    </div>
  );
};

export default Projects;
