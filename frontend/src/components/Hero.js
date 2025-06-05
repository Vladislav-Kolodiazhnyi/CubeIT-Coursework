import React from 'react';
import './Hero.css';

function Hero({ title }) {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;