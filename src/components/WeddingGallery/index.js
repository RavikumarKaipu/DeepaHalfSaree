import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const imageList = [
  '1N5jcAEEt-9RGQ8XUuRp41Z6bAADESGal',
  '1SqqG5OQYkcaaRJZFfJ4K18ZkIMtS_3Rp',
  '1dtcyzZ8xAasZ_MKEZfz-8mLHqIMFRwhf',
  '1c3pufawEM75bVR8F5whdf8iiPx7tciS_',
  '1btQ5tlDzZlXsHPG2CWEef6O3E7RHaIb2',
  '1nCDziSfE9Shfa0IYMBmVUXlQwSc7tk2u',
  '10gmnDo-PnLc1S5hVftqALGkt_dCvTotf',
  '1g-Qphr9pz5c-6xzNy90wjDqgmSX1aQZv',
  '1ZRFSlQzHqW7c1W2jzN23DeW_piRH5lb9',
  '1nPTeuCVONVuH0JVDfd0qQ5tg2xnorrkS',
  '1Xw3POOQyOp4brr-JHlODaUgKFB220TYi',
  '1bS_hVcc3DkcJu4x-IuJZD-obK5h0zy1x',
  '1MOEn9kWWeV_RERaQcI7hZ1WwqheeoKvb',
  '1tqrcMEHKhzyj3KB-L9Pox53PEJnlcg3Q',
  '18lCq-ZLOuoVHJxKO0kcbHV9X1qrvW2a7',
  '1HePZr_mzVdaBM9QbmycRpW9yMCpkB8wg',
  '1VkoGQ6Rf81IWt02txDPw-3AXSF7JkvQd',
  '1ufrwxXNx9I-pwRg3nHLJpOhlxlXZd6is',
  '1kyDNfux1F9YKUGuRD1IoerVUwH_0RpAy',
  '1_iZX24EDPndicxOXRIHtUvzA9T0hjEoC',
  '1Omnu2lut3wRzG21mx_E3pdQN8l2Hr0BQ',
  '1hGmcKgrUHa0gCsOD162A6n2PXUvCmwfv',
  '1AFbd81EK0hFqaDuEZyQzmB1iqLOjgG9r',
  '1ppadqGaHTb_3weRRD1qLGOz5h4zvsUoi',
  '1V4V7SQJAXRWJmEYvcGNMcLSmZFUOSZt5',
  '1JBaqEUAfNo7TSf6ZZYLtlfBgwzI6UN-S',
  '14eTuy9f4BKC7CU8fRQ4SvLUKyPayiZv_',
  '14XJ4SQOvSoNyQaIX1RrY1yyO-dMyUgSt',
  '1J7lS3ixKqdp9WmuVxGrzqz23p5441RVw',
  '1843H35YpgIHvYkW_CXhMNSKt7K1zWadv',
  '1fNu69ZzIFrss_0h85ku4pI1tG4Q-zQCE',
  '1kWleNKGAL6TbBmp-Lx0c_PFKXLqhujWW',
  '1RwAMZVh_G9jlIzL8MO68moz5steUqONQ',
  '1RtZ2NmczjTvmaP4RI0eJmo7F-Ava_KZP',
  '1TceIJ7BznUAxNVVikDaJtYSMc5SpWqI-'
];

const WeddingGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [showLightbox, setShowLightbox] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preventRightClick = (e) => e.preventDefault();
    window.addEventListener('contextmenu', preventRightClick);
    return () => window.removeEventListener('contextmenu', preventRightClick);
  }, []);

  const nextImage = () => {
    setDirection('next');
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setDirection('prev');
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const openLightbox = () => {
    setShowLightbox(true);
    setIsLoading(true);
  };
  const closeLightbox = () => setShowLightbox(false);

  const getIframeURL = (fileId) =>
    `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Function Moments</h2>

      <div className="gallery-slider">
        <button className="nav-button" onClick={prevImage}>←</button>

        <div className={`iframe-slide-container ${direction}`}>
          {isLoading && <div className="spinner"></div>}
          <iframe
            key={currentIndex}
            src={getIframeURL(imageList[currentIndex])}
            title={`Wedding ${currentIndex + 1}`}
            allow="autoplay"
            className={`slider-iframe ${isLoading ? 'loading' : 'active'}`}
            onLoad={() => setIsLoading(false)}
            onClick={openLightbox}
          ></iframe>
        </div>

        <button className="nav-button" onClick={nextImage}>→</button>
      </div>

      <div className="frame-number">Image {currentIndex + 1} of {imageList.length}</div>

      {showLightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="iframe-wrapper">
            {isLoading && <div className="spinner"></div>}
            <iframe
              src={getIframeURL(imageList[currentIndex])}
              title={`Full View ${currentIndex + 1}`}
              allow="autoplay"
              className="lightbox-iframe"
              onLoad={() => setIsLoading(false)}
            ></iframe>
            <div className="iframe-overlay"></div>
          </div>
        </div>
      )}

      <Link to="/">
        <button className="go-back-btn">⬅️ Go Back</button>
      </Link>
    </div>
  );
};

export default WeddingGallery;
