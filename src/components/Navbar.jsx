import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navigation ${isActive ? "mobile-menu-active" : ""}`}>
      <div className="nav-brand-logo">Rahini M</div>

      <button
        className={`menu-toggle-btn ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links-wrapper ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsActive(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsActive(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsActive(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsActive(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a
              className="nav-cta-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rahinimanikandan39@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Let's work together
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
