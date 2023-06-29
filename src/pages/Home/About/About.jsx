import React from "react";
import "./About.css";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className="About"
    initial={{x: "0rem",opacity:0}}
    whileInView ={{x:0,opacity:1}}
    transition={{
        duration: 3,
        type: "spring"
    }}
    >
      <span>About</span>
      <div className="hrdiv"/>
      <p>
        <span style={{ marginLeft: "4rem" }}>Welcome </span>to the Epicenter of
        Technological Exploration! At IIT Tirupati, we take pride in nurturing
        the innovative and intellectual potential of our students through a
        range of exciting technical clubs. Our diverse clubs cater to various
        fields of interest, including robotics, electronics, coding, AI/ML,
        automobile engineering, astronomy, and entrepreneurship. Join us on a
        thrilling journey of exploration, creativity, and problem-solving as we
        dive into the world of technology and innovation. Our technical clubs
        provide an interactive platform for like-minded individuals to
        collaborate, learn, and grow together. Whether you're a beginner or an
        expert, our clubs offer something for everyone.
      </p>
    </motion.div>
  );
};

export default About;
