import React from "react";
import "./Home.css";
import Achievements from "./Achievements/Achievements";
import Carousel from "./Carousel";
import About from "./About/About";
import ClubGrid from "./ClubGrid/ClubGrid";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 8,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 8,
      },
    },
  };

  return (
    <div className="home">
      <div className="blur home-blur"></div>
      <div className="banner">
        <motion.div variants={container}
          initial="hidden"  
          animate="visible"
        className="bannerContent">
          <motion.div variants={container} className="tagline">
            <motion.h2 variants={child} className="title">
              Tech Clubs
            </motion.h2>
            <motion.p variants={child} className="subtitle">
              Technical clubs in Indian Institute of Technology, Tirupati
            </motion.p>
          </motion.div>

          <Carousel />
        </motion.div>
      </div>
      <About />
      {/* <Achievements /> */}
      <ClubGrid />
    </div>
  );
};

export default Home;
