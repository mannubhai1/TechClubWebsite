import React from "react";
import "./ClubHead.css";

const ClubHead = () => {
  return (
    <div className="ClubHead">
      <div className="left-c">
        <div className="custom-hr1"/>
        <div className="title" >
          <span>CLUB</span>
          <span> HEAD</span>
        </div>
        <div  style={{ fontSize: "1.2rem" , fontWeight: '380', fontStyle:"Great Vibes"}}>
          <span>VAIBHAV MISHRA</span>
        </div>
        <span
          style={{ fontWeight: 300, fontSize: "1rem", position: "absolute" }}
        >
          <span style={{ fontWeight: 300 }}>2023-24</span>
        </span>
      </div>

      <div className="right-c"></div>
    </div>
  );
};

export default ClubHead;
