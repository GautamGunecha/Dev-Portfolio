import React from "react";
import "./Footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <a href="https://github.com/GautamGunecha/dev-portfolio">
          <p>Gautam Gunecha</p>
        </a>
      </div>
      <div className="footerRight">
        <a href="https://www.linkedin.com/in/gunechagautam/">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="https://github.com/GautamGunecha">
          <AiOutlineGithub size={30} />
        </a>
        <a href="/">
          <AiOutlineMail size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
