import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <div className="logo-icon">📒</div>
            मेरो खाता
          </a>
          <p>Simple accounting software for Nepali businesses. Track sales, expenses, and never lose track of your khata.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Demo</a>
          <a href="#">Updates</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">WhatsApp Support</a>
          <a href="#">Video Tutorials</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="#">📞 +977-9800000000</a>
          <a href="#">📧 hello@merokhata.com</a>
          <a href="#">📍 Kathmandu, Nepal</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2081 Mero Khata. Made with ❤️ in Nepal.</p>
      </div>
    </footer>
  );
};

export default Footer;
