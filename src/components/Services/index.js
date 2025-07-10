import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: '🎥 Cinematic Videography',
    description: 'Capture moments with cinematic excellence and storytelling finesse.',
  },
  {
    title: '📸 Wedding Photography',
    description: 'Timeless photographs that preserve your special day forever.',
  },
  {
    title: '💑 Pre-Wedding Shoots',
    description: 'Stylized pre-wedding shoots to showcase your love journey.',
  },
  {
    title: '🎉 Event Coverage',
    description: 'Full event coverage including Haldi, Sangeet, Reception, and more.',
  },
  {
    title: '📱 Instant Mobile Gallery',
    description: 'Quick QR-based mobile album delivery system for instant viewing.',
  },
  {
    title: '📦 Custom Photo Albums',
    description: 'Personalized wedding albums with high-quality prints and binding.',
  },
];

const Services = () => {
  return (
    <div className="services-container" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/g1.jpg'})`,
      }}>
      <h1 className="section-title animate-fade">✨ Our Services</h1>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className={`service-card animate-zoom delay-${index}`} key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Link to='/'><button className="go-back-btn">⬅️ Go Back</button></Link>
    </div>
  );
};

export default Services;
