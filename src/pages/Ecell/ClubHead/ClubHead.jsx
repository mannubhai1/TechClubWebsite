import React from "react";
import "./ClubHead.css";
import { motion } from "framer-motion";

const ClubHead = () => {
  return (
    <div className="ClubHead">
      <div className="left-c">
        <div className="custom-hr1" />
        <div className="title">
          <span>CLUB</span>
          <span> HEAD</span>
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "380",
            fontStyle: "Great Vibes",
          }}
        >
          <motion.span
            initial={{ x: "-2rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            VAIBHAV MISHRA
          </motion.span>
        </div>
        <span
          style={{ fontWeight: 300, fontSize: "1rem", position: "absolute" }}
        >
          <motion.span
            style={{ fontWeight: 300 }}
            initial={{ y: "2rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            2023-24
          </motion.span>
        </span>
      </div>

      <div className="right-c"></div>
    </div>
  );
};

export default ClubHead;
