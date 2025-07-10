import React from 'react';
import './index.css';
import Footer from '../Footer';

const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/frint-copy.jpg'})`,
      }}
    >
      <div className="overlay-content">
        <div className="sub-container">
        <h1 className="studio-title">
  {'SAHITHYA STUDIO'.split('').map((char, index) => (
    <span className="char" style={{ animationDelay: `${index * 0.15}s` }} key={index}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))}
</h1>
          <p className="fade-slide-in delay-1">Capturing Love & Light</p>
          <div className="hero-buttons fade-slide-in delay-2">
            <a href="/gallery" className="hero-btn">📸 Gallery</a>
            <a href="/mobile-gallery" className="hero-btn">📱 Mobile Gallery</a>
            <a href="/contact" className="hero-btn">📞 Contact</a>
            <a href="/services" className="hero-btn">🛠️ Services</a>
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};

export default HeroSection;
