import React from "react";
import Carousel from "react-elastic-carousel";
import e1 from './Hard hat helmet.jpg'
import e2 from './electricBike.jpg'
import e3 from './Techmaniacs_club_project_Drone_Build_2.jpg'

const data = [
    {
        title: "Miner Helmet",
        date: "Aug 12",
        photo: e1,
        about:
            "IoT Helment for miners",
    },
    {
        title: "Electric Bike",
        date: "Feb 22",
        photo: e2,
        about:
            "Electric Bike made by Techmaniacs",
    },
    {
        title: "Drone",
        date: "Jan 28",
        photo: e3,
        about:
            "Fully functioning Drone!",
    },
];

const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const TechmaniacsFuture = () => {
    return (
        <div className="events">
            <div className="etitle">
                <div className="heaadinge" style={{ marginBottom: "2rem" }}>
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

export default TechmaniacsFuture;
