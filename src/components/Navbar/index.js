import React, { useEffect } from 'react';
import './index.css';
import confetti from 'canvas-confetti';

const Navbar = () => {
  useEffect(() => {
    // Confetti celebration on mount (one-time)
    confetti({
      particleCount: 150,
      spread: 160,
      origin: { y: 0.3 },
      scalar: 1.2,
    });
  }, []);

  return (
    <div className="navbar smoke-effect">
      <div className="navbar-logo">💖 Jaya Deepa <span className="bouquet">💐</span></div>
    </div>
  );
};

export default Navbar;
