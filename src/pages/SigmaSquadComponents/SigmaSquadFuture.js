import React from "react";
import Carousel from "react-elastic-carousel";
import e1 from '../../images/ss.png'
import e2 from '../../images/ss.png'
import e3 from '../../images/ss.png'

const data = [
    {
        title: "Future Event 1",
        date: "Aug 12",
        photo: e1,
        about:
            "About 1",
    },
    {
        title: "Future Event 2",
        date: "Feb 22",
        photo: e2,
        about:
            "About 2",
    },
    {
        title: "Future Event 3",
        date: "Jan 28",
        photo: e3,
        about:
            "About 3",
    },
];

const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const SigmaSquadFuture = () => {
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

export default SigmaSquadFuture;
