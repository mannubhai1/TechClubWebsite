import React from "react";
import { programsData } from "./programsData";
import './Programs.css'
import rightArrow from '../../../images/rightArrow.png'
import {motion} from 'framer-motion'

const Programs = () => {
  
  return (
    <div className="Programs">
      <div className="programs-header">
        <h3 className="mobile-header">Programs</h3>
        <motion.span className="stroke-text"
        initial={{ x: "-2rem", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        >Explore </motion.span>
        <motion.span
        initial={{ y: "-2rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        >Empower</motion.span>
        <motion.span className="stroke-text"
        initial={{ x: "2rem", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        > succeed</motion.span>
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
