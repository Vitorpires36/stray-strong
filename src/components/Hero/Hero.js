import React from 'react';
import logo from '../../assets/images/logo-stray-strong.png';
import backgroundImage from '../../assets/images/products/animals-bg.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-background-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-logo-container">
          <img src={logo} alt="Stray Strong" className="hero-logo" />
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">LIL</span>
          <span className="hero-title-line">FEEDERS</span>
        </h1>
        
        <p className="hero-subtitle">
          Transforming <span className="highlight-red">longing</span> into{' '}
          <span className="highlight-red">care</span>
          <br />
          <span className="highlight-red">plastic</span> into{' '}
          <span className="highlight-red">shelter</span>
        </p>
        
        <div className="hero-actions">
          <a 
            href="https://benfeitoria.com/straystrong" 
            className="hero-cta primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Movement
          </a>
          <a 
            href="#lilfeeders" 
            className="hero-cta secondary"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;