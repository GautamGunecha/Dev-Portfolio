import React from "react";
import "./Header.css";

const Header = () => {
  const gotoSection = () => {
    window.scrollTo({
      top: 805,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <h1>
        Hi, my name is <span>Gautam Gunecha</span>
      </h1>
      <h1>I'm a Full Stack Developer.</h1>
      <button onClick={gotoSection}>Know more</button>
    </div>
  );
};

export default Header;
