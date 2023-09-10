import React from "react";
import "./UpcomingEvents.css";
import Carousel from "react-elastic-carousel";
import e1 from "../Photos/e1.jpeg";
import e2 from "../Photos/e2.jpg";
import e3 from "../Photos/e3.jpg";
import e4 from "../Photos/e4.jpg";
import e5 from "../Photos/e5.jpg";
import Item from "./Item";

const data = [
  {
    title: " IDEATE",
    date: "Aug 12",
    photo: e1,
    about:
      "We assist students in identifying problems and proposing solutions, fueling successful enterprises.",
  },
  {
    title: " INNOVATE",
    date: "Feb 22",
    photo: e2,
    about:
      "Our belief in Exposure to technology breeds innovation drives us to cultivate innovative mindsets",
  },
  {
    title: " IMPLEMENT  ",
    date: "Jan 28",
    photo: e3,
    about:
      " We guide students along the entrepreneurial path, helping them transform ideas into tangible realities.",
  },
  {
    title: " INCUBATE  ",
    date: "Aug 02",
    photo: e4,
    about:
      "We facilitate seamless interaction between students, faculty, and entrepreneurs, nurturing groundbreaking ideas.",
  },
];

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const UpcomingEvents = () => {
  return (
    <div className="events">
      <div className="etitle">
        <div className="heaadinge" style={{marginBottom: "2rem"}}>
          <span>Upcoming </span>
          <span>Events</span>
        </div>
        <div className="slidere">
          <Carousel breakPoints={breakPoints}>
            {data.map((card, i) => (
              <div key={i} className="tt">
                <img className="uimage" src={card.photo} alt={card.title} />
                <div className="details">
                  <span className="mydate">{card.date}</span>
                  <span className="mydetails">{card.about}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
