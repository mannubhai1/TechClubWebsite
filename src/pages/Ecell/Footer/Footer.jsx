import React from "react";
import "./Footer.css";
import ec from "../../../images/ecell.jpeg";

const Footer = () => {
  const handleConnectClick = () => {
    window.location.href = "mailto:ecell@iittp.ac.in";
  };

  return (
    <div className="Footer">
      <div className="logo">
        <span>E Cell</span>
        <img src={ec} alt="" />
      </div>
      <div className="social">
        <span>Links</span>
        <ul>
          <li>
            <a href="https://www.instagram.com/ecell_iitt/">Instagram</a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/e-cell-iit-tirupati-8689391b5?original_referer=https%3A%2F%2Fwww.google.com%2F">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100064832861995&sk=mentions">
              FaceBook
            </a>
          </li>
          <li>
            <a href="https://discord.com/channels/1119273291459346482/1119273291459346485">
              Discord
            </a>
          </li>
        </ul>
      </div>
      <div className="connect">
        <span>Mail</span>
        <button onClick={handleConnectClick} type="button">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Footer;
