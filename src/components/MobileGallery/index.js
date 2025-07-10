import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import './index.css';
import Navbar from '../Navbar';

const MobileGallery = () => {
  return (
    <div>
      <Navbar />
      <div className="mobile-gallery-container">
        <h1 className="gallery-title animate-fade-slide">
          <FaMobileAlt size={28} /> View Images on Your Mobile
        </h1>

        <p className="gallery-subtitle animate-fade-slide delay-1">
          Scan the QR code below to access the mobile gallery.
        </p>

        <div className="image-section animate-fade-slide delay-2">
  <iframe
    src="https://drive.google.com/file/d/1XJEjWfdwkiBWVSU-de3ibP1SqW_-7kUh/preview"
    title="Client Deepa QR"
    className="mobile-img"
    allow="autoplay"
    style={{
      width: '300px',
      height: '300px',
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    }}
  ></iframe>
</div>


        <div className="thank-you-text animate-fade-slide delay-3">
          <p>🙏 Thank you for choosing us to capture your special moments!</p>
        </div>
      </div>
    </div>
  );
};

export default MobileGallery;
