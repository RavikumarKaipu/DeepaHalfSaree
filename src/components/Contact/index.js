import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>📬 Contact Sahithya Studio</h1>
      <p>We'd love to hear from you! Reach out via WhatsApp or Email.</p>



      <div className="contact-buttons">

        <a
          href="https://wa.me/917036621905"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          💬 Chat on WhatsApp
        </a>


        <a
          href="mailto:sahityastudio@example.com"
          className="email-btn"
        >
          📧 Send Email
        </a>
      </div>
      <Link to='/'><button className="go-back-btn">⬅️ Go Back</button></Link>
      
    </div>
  );
};

export default ContactPage;
