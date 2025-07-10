import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const imageList = [
  '00 copy.jpg', '01 copy.jpg', '01a copy.jpg', '02 copy.jpg',
  '03 copy.jpg', '04 copy.jpg', '05 copy.jpg', '06 copy.jpg',
  '07 copy.jpg', '08 copy.jpg', '09 copy.jpg', '10 copy.jpg',
  '11 copy.jpg', '12 copy.jpg', '13 copy.jpg', '14 copy.jpg',
  '15 copy.jpg', '16 copy.jpg', '17 copy.jpg', '18 copy.jpg', '19 copy.jpg',
  '20 copy.jpg', '21 copy.jpg', '22 copy.jpg', '23 copy.jpg',
  '24 copy.jpg', '25 copy.jpg', '26 copy.jpg', '27 copy.jpg',
  '28 copy.jpg', '29 copy.jpg', '30 copy.jpg', '31 copy.jpg',
  '32 copy.jpg', 'back copy.jpg', 'front copy.jpg'
];

const WeddingGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const openLightbox = () => setShowLightbox(true);
  const closeLightbox = () => setShowLightbox(false);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Function Moments</h2>
      <div className="gallery-slider">
        <button className="nav-button" onClick={prevImage}>←</button>

        <img
          src={`/wedding/${imageList[currentIndex]}`}
          alt={`Wedding ${currentIndex + 1}`}
          className="slider-image"
          onClick={openLightbox}
        />

        <button className="nav-button" onClick={nextImage}>→</button>
      </div>

      {/* Lightbox full-screen preview */}
      {showLightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img
            src={`/wedding/${imageList[currentIndex]}`}
            alt={`Full View ${currentIndex + 1}`}
            className="lightbox-image"
          />
          
        </div>
        
      )}
      <Link to='/'><button className="go-back-btn">⬅️ Go Back</button></Link>

    </div>
  );
};

export default WeddingGallery;