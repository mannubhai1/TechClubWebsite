import React, { useState } from "react";
import dw from "../../../images/dw.jpeg";
import ecell from "../../../images/ecell.jpeg";
import gv from "../../../images/gv.jpeg";
import ss from "../../../images/ss.png";
import wv from "../../../images/wv.jpeg";
import tm from "../../../images/tm.jpeg";
import "./ClubGrid.css";
import { motion } from "framer-motion";

const ClubGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const clubs = [
    {
      name: "Digital Wizards",
      image: dw,
      description:
        "Master the art of programming, sharpen your coding skills, and stay ahead in the fast-paced world of software development.",
    },
    {
      name: "Techmaniacs",
      image: tm,
      description:
        "Delve into the realm of robotics, automation, and electronic systems. Build cutting-edge projects and participate in exciting competitions.",
    },
    {
      name: "Sigma Squad",
      image: ss,
      description:
        "Unleash the power of artificial intelligence and machine learning. Learn to develop intelligent systems, analyze data, and create innovative AI applications.",
    },
    {
      name: "Gagan Vedhi",
      image: gv,
      description:
        "Gaze at the wonders of the universe and unravel the mysteries of the cosmos. Engage in stargazing, astrophotography, and learn about celestial objects.",
    },
    {
      name: "E Cell",
      image: ecell,
      description:
        "Ignite your entrepreneurial spirit and shape the future. Learn from successful entrepreneurs, participate in workshops, and network with like-minded individuals.",
    },
    {
      name: "Winged Voyage",
      image: wv,
      description:
        "Embark on a journey into the world of automobiles. Explore the latest advancements, design and build vehicles, and unravel the mechanics that drive them",
    },
  ];

  

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="clubgrid">
      <motion.span 
      initial={{y: "2rem",opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{
          duration: 2,
          type: "spring"
      }}
      >
        Discover
      </motion.span>
      {/* how to change the color of below span??  and make it big???*/}
      <motion.span 
      initial={{y: "2rem",opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{
          duration: 2,
          type: "spring"
      }}
      >
        the clubs that make up the backbone of our technical community
      </motion.span>
      <div className="grid-container">
        {clubs.map((club, index) => (
          <div
            className={`grid-item ${index === hoveredIndex ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverEnd}
          >
            <img src={club.image} alt={club.name} />
            <div className="overlay">
              <h3>{club.name}</h3>
              <p>{club.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubGrid;
