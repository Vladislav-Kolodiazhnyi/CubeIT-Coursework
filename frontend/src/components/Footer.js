import React from "react";
import "./Footer.css";
import logo from "../assets/wlogo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span className="footer-site-name">CubeIT</span>
        </div>

        <nav className="footer-nav">
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/contact">Контакти</Link>
          <Link to="/news">Новини</Link>
        </nav>

        <div className="footer-center">
          <h4>Контакти</h4>
          <p>
            <i className="bi bi-geo-alt"></i> м. Полтава, проспект Віталія
            Грицаєнка, 24.
          </p>
          <p>
            <i className="bi bi-envelope"></i> cubeit.portal@gmail.com
          </p>
          <p>
            <i className="bi bi-telephone"></i> +38 (098) 705 85 05
          </p>
          <p>
            <i className="bi bi-telephone"></i> +38 (063) 288 52 60
          </p>
        </div>

        <div className="footer-right">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Інформаційний портал CubeIT. Усі права захищені.</p>
      </div>
    </footer>
  );
}

export default Footer;
