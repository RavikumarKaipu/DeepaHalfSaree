import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import './index.css';
import Navbar from '../Navbar';

const MobileGallery = () => {
  return (
    <div>
      <Navbar/>

    
    <div className="mobile-gallery-container">
      <h1 className="gallery-title animate-fade-slide">
        <FaMobileAlt size={28} /> View Images on Your Mobile
      </h1>

      <p className="gallery-subtitle animate-fade-slide delay-1">
        Scan the QR code below to access the mobile gallery.
      </p>

      <div className="image-section animate-fade-slide delay-2">
        <img src="/images/DEEPA.png" alt="Client Deepa" className="mobile-img zoom-on-hover" />
      </div>

      <div className="thank-you-text animate-fade-slide delay-3">
        <p>🙏 Thank you for choosing us to capture your special moments!</p>
      </div>
    </div>
    </div>
  );
};

export default MobileGallery;
