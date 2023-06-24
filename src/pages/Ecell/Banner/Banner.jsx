import React from "react";
import ecell from "../../../images/ecell.jpeg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="blur banner-blur"></div>
      <div className="left-b">
        <div className="logo">
          <img src={ecell} alt="Ecell" />
          <span>E Cell</span>
        </div>
        <div className="about">
          <span>
            Entrepreneurship Cell, IIT Tirupati aims to create an
            entrepreneurial ecosystem to provide a platform for individuals with
            creative minds and ideas to explore various business opportunities.
            We enable smooth and efficient interaction between students,
            faculty, working professionals, aspiring and existing entrepreneurs,
            mentors, angel investors and venture capitalists.
          </span>
        </div>
      </div>
      <div className="right-b"></div>
    </div>
  );
};

export default Banner;
