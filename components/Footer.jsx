
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container foot'>
        <div className='icons'>
          <i className="bi bi-facebook" aria-label="Facebook"></i>
          <i className="bi bi-instagram" aria-label="Instagram"></i>
          <i className="bi bi-pinterest" aria-label="Pinterest"></i>
          <i className="bi bi-youtube" aria-label="YouTube"></i>
          <i className="bi bi-envelope" aria-label="Email"></i>
          <i className="bi bi-newspaper" aria-label="Newsletter"></i>
        </div>
        <hr />
        <div className='row text-center'>
          <h5>© The Traveller 2024</h5>
          <p className='mt-2'>
            Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you.
            As an affiliate, I only recommend products and services that I feel are high quality and helpful to my readers. Thanks for your support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
