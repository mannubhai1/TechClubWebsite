import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const handleConnectClick = () => {
    window.location.href = "mailto:technical_sec@iittp.ac.in";
  };

  const handleConnectClick1 = () => {
    window.location.href = "mailto:technical_sec@iittp.ac.in";
  };

  const handleConnectClick2 = () => {
    window.location.href = "technical_sec@iittp.ac.in";
  };

  return (
    <div className="home-Footer">
      <div className="home-logo">
        <span>Sumukh Porwal</span>
        <span>Technical Affairs Secretary</span>
      </div>
      <div className="home-social">
        <span>Links</span>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/sumukh-porwal-6a1393186/?trk=public_profile_browsemap&originalSubdomain=in"
          >
            <AiFillLinkedin
              role="button"
              aria-label="Linkedin"
              size={35}
              tabIndex="4"
              color="white"
            />
          </a>

          <a
            href="https://www.instagram.com/automobileclub.iitt/"
            target="_blank"
            rel="noopener noreferrer"
            className="FaInstagram"
          >
            <FaInstagram
              role="button"
              aria-label="Instagram"
              size={35}
              tabIndex="3"
              color="white"
            />
          </a>

          <AiOutlineMail
            role="button"
            aria-label="Discord"
            size={35}
            tabIndex="2"
            
            color="white"
            className="AiOutlineMail"
            onClick={handleConnectClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
