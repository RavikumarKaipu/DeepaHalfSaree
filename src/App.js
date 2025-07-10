import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import confetti from 'canvas-confetti';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './components/Contact';
import WeddingGallery from './components/WeddingGallery';
import MobileGallery from './components/MobileGallery';
import Services from './components/Services';
import './App.css';
import QRCodeGenerator from './components/QRCode';

// 👇 This component runs confetti only once on homepage
const ConfettiOnce = () => {
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === '/';
    const confettiShown = sessionStorage.getItem('confettiShown');

    if (isHome && !confettiShown) {
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
      });
      sessionStorage.setItem('confettiShown', 'true');
    }
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      sessionStorage.setItem('hasSeenSplash', 'true');
        setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          <ConfettiOnce />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<WeddingGallery />} />
            <Route path="/mobile-gallery" element={<MobileGallery />} />
            <Route path="/services" element={<Services />} />
            <Route path='/splash' element={<SplashScreen/>}/>
            <ROute path='/qr' element={<QRCodeGenerator/>}/>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
