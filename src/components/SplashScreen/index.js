import React, { useEffect, useState } from 'react';
import './index.css';

const SplashScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="overlay">


        <h1 className="splash-text">📸 Sahithya Studio</h1>
        <div className="studio-features">
  <span className="tag fade-delay-1">📸 DSLR Cameras</span>
  <span className="tag fade-delay-2">🎬 LED Lighting</span>
  <span className="tag fade-delay-3">🎤 Audio Mics</span>
  <span className="tag fade-delay-4">🎥 Prime Lenses</span>
  <span className="tag fade-delay-5">💻 Editing Suite</span>
</div>
      </div>
    </div>
  );
};

export default SplashScreen;
