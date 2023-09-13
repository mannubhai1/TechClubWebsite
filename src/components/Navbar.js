import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
// cf menu submenu
const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navb}`}>
      <div className={`${styles.main} container-fluid`}>
        <img
          src="./iitt_logo.png"
          alt="iitt logo"
          className={styles.navbarLogo}
        />
        <div className={styles.container}>
          <ul className={`${styles.menu} ${styles.cf}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/" style={{ pointerEvents: "none" }}>
                Clubs
              </a>
              <ul className={styles.submenu}>
                <li>
                  <a href="/digitalwizards">Digital Wizards</a>
                </li>
                <li>
                  <a href="/techmaniacs">Techmaniacs</a>
                </li>
                <li>
                  <a href="/wingedvoyage">Winged Voyage</a>
                </li>
                <li>
                  <a href="/gaganvedhi">Gagan Vedhi</a>
                </li>
                <li>
                  <a href="/sigmasquad">Sigma Squad</a>
                </li>
                <li>
                  <a href="/ecell">E-CELl</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            {/* <li>
              <a href="/">
                About us
              </a>
            </li> */}
            <li>
              <a href="/contact-us">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
