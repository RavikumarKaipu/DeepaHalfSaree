import React from 'react';
import './index.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-floating">
      <span className="follow-text">Follow us on</span>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/sahithya_fashion_studio?igsh=a2s4cWplY2RyM2o4"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icon insta" />
        </a>
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="icon fb" />
        </a>
        <a
          href="https://wa.me/917036621905"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="icon whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
