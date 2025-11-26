import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <div className="logo-icon">📒</div>
        मेरो खाता
      </a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="#" className="btn btn-primary">सुरु गर्नुहोस्</a>
      </div>
    </nav>
  );
};

export default Navbar;
