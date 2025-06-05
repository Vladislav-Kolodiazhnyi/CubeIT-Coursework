import React, { useState } from "react";
import { Link } from "react-router-dom";
import wlogo from "../assets/wlogo.png";
import dlogo from "../assets/dlogo.png";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`header-container ${isOpen ? "open" : ""}`}>
        <Link to="/" className="logo-container">
          <img src={isOpen ? dlogo : wlogo} alt="Логотип" className="logo" />
          <span className="site-name">CubeIT</span>
        </Link>
        <button
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>
      </div>

      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <nav className="menu">
          <Link to="/" onClick={toggleMenu}>
            ГОЛОВНА
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            ПРО САЙТ
          </Link>
          <Link to="/gallery" onClick={toggleMenu}>
            ГАЛЕРЕЯ
          </Link>
          <Link to="/news" onClick={toggleMenu}>
            НОВИНИ
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            КОНТАКТИ
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
