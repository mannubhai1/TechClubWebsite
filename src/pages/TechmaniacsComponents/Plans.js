import React, { useEffect, useState } from "react";
import e1 from './Hard hat helmet.jpg'
import e2 from './Techmaniacs_club_project_Drone_Build_2.jpg'
import e3 from './race_car.jpg'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from 'framer-motion'

const Plans = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages([e1, e2, e3]);
    }, []);

    useEffect(() => {
        console.log(images);
    }, [images]);

    const items = images.map((c, index) => (
        <div
            className="items-div"
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
        >
            <img
                src={c}
                alt="card"
                style={{
                    width: "24rem",
                    border: "4px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "1.1rem",
                    transition: "box-shadow 0.3s ease-in-out",
                    boxShadow: "0 0 0 rgba(255, 255, 255, 0)",

                }}
                className="glow-image"
                onMouseEnter={(e) => {
                    e.target.style.boxShadow = "1px 1px 20px rgba(255, 255, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.boxShadow = "0 0 0 rgba(255, 255, 255, 0)";
                }}
            />
        </div>
    ));

    const responsive = {
        0: {
            items: 1,
        },
    };

    return (
        <div
            className="carousel-container"
            style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                height: '90%',
                marginBottom: '',
                backgroundImage: 'linear-gradient(to bottom, #87cefa 0%, #b2ebf2 50%, #87cefa 100%)'
            }}
        >
            <motion.span
                initial={{ x: "-2.4rem", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                className="stroke-text2"
                style={{
                    fontWeight: "bold",
                    fontSize: "3.2rem",
                    color: 'black',
                    marginBottom: "0.5rem",
                }}
            >
                Past
            </motion.span>
            <motion.span
                initial={{ x: "-3rem", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                className="stroke-text2"
                style={{
                    fontWeight: "bold",
                    color: 'black',
                    fontSize: "3.1rem",
                    fontStyle: 'italic',
                    letterSpacing: '2px'
                }}
            >
                Events
            </motion.span>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={2000}
                animationDuration={1800}
                responsive={responsive}
                items={items}
                autoPlay
                stagePadding={{ paddingLeft: "20rem", paddingRight: "8rem" }}
                buttonsDisabled
                fadeOutAnimation={true}
                style={{
                    marginBottom: '2rem'
                }}
            />
        </div>
    );
};

export default Plans;
