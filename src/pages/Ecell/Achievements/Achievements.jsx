import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Inter IIT Tech Meet 11.0",
      description:
        "Won bronze for the problem statement grad-capital which involves innovation and prototype modeling.",
    },
    {
      title: "Sarc Bizzaro Event by IITB",
      description:
        "Vaibhav Mishra and K. Sai Vignesh qualified for the inter-iit round.",
    },
  ];

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <div className="achievement-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement" key={index}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
