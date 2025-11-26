import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <div className="logo-icon">📒</div>
        हाम्रो खाता
      </a>
      <div className="nav-links">
        <a href="#features">सुविधाहरू</a>
        <a href="#pricing">मूल्य</a>
        <a href="#contact">सम्पर्क</a>
        <a href="#" className="btn btn-primary">
          अहिले नै सुरु गर्नुहोस् →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
