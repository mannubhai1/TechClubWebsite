import React from "react";
import { programsData } from "./programsData";
import './Programs.css'
import rightArrow from '../../../images/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs">
      <div className="programs-header">
        <h3 className="mobile-header">Programs</h3>
        <span className="stroke-text">Explore </span>
        <span>Empower</span>
        <span className="stroke-text"> succeed</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            <span>{program.title}</span>
            <span>{program.about}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
