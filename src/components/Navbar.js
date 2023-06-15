import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className=" main container-fluid">
        <img src="./iitt_logo.png" alt="iitt logo" className="navbar-logo" />
        <div className="container">
          <ul class="menu cf">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">
                Clubs
              </a>
              <ul class="submenu">
                <li>
                  <a href="/digitalwizards">
                    Digital Wizards
                  </a>
                </li>
                <li>
                  <a href="/techmaniacs">
                    Techmaniacs
                  </a>
                </li>
                <li>
                  <a href="/wingedvoyage">
                    Winged Voyage
                  </a>
                </li>
                <li>
                  <a href="/gaganvedhi">
                    Gagan Vedhi
                  </a>
                </li>
                <li>
                  <a href="/sigmasquad">
                    Sigma Squad
                  </a>
                </li>
                <li>
                  <a href="/ecell">
                    E-CELl
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                Blog
              </a>
            </li>
            <li>
              <a href="/">
                About us
              </a>
            </li>
            <li>
              <a href="/">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
