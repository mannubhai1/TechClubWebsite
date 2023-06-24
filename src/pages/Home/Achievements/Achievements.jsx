import React, { useState } from "react";
import { awardsData } from "../../../data/awardsData";
import "./Achievements.css";
import leftArrow from "../Hassets/leftArrow.png";
import rightArrow from "../Hassets/rightArrow.png";

const Achievements = () => {
  const [id, setId] = useState(0);
  const dlen = awardsData.length;

  return (
    <div className="Achievements">
      <div className="left-a">
        <h1>Achievements</h1>
        <hr />
        <span>{awardsData[id].review}</span>
        <span>
          <span>{awardsData[id].name}</span> - {awardsData[id].status}
        </span>
      </div>
      <div className="right-a">
        <div className="blur img-blur"></div>
        <img src={awardsData[id].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              id === 0 ? setId(dlen - 1) : setId((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              id === dlen - 1 ? setId(0) : setId((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
