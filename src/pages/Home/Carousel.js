import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import dw from "../../images/dw.jpeg";
import ecell from "../../images/ecell.jpeg";
import gv from "../../images/gv.jpeg";
import ss from "../../images/ss.png";
import tm from '../../images/tm.jpeg'
import wv from "../../images/wv.jpeg";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages([
      [dw, "Digital Wizards"],
      [ecell, "E Cell"],
      [gv, "Gagan Vedhi"],
      [ss, "Sigma Squad"],
      [tm, "Techmaniacs"],
      [wv, "Winged Voyage"],
    ]);
    console.log(images);
  }, []);

  const items = images.map((club, index) => (
    <Link
      key={index}
      className={`carousel-item ${index === currentIndex ? "active" : ""}`}
      to="/"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        textDecoration:"none"
      }}
    >
      <img
        src={club[0]}
        alt="club-name"
        // height="20"
        className="h-[13vh]"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />

      <br></br>
      <span
        className="stroke-text"
        style={{
          WebkitTextStrokeWidth: "0.8px",
          WebkitTextStrokeColor: "white",
          fontSize: 'normal',
          color: ' #49c5b6'
        }}
      >
        {club[1]}
      </span>
    </Link>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    256: {
      items: 2,
    },
    612: {
      items: 3,
    },
    812: {
      items: 4,
    },
  };

  return (
    <div
      className="carousel-style"
      style={{
        height: "70%",
        display: "flex",
        marginTop: '1rem',
        alignItems: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1700}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
