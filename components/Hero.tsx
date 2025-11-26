import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <div className="hero-badge">🇳🇵 Made for Nepal</div>
        <h1>Simple <span>Hisab Kitab</span> for Your Business</h1>
        <p className="hero-nepali">तपाईंको व्यापारको लागि सजिलो खाता व्यवस्थापन</p>
        <p>Track sales, expenses, and party ledgers with ease. Built for Nepali businesses with VAT support, Bikram Sambat calendar, and WhatsApp payment reminders.</p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-accent">Start Free Trial</a>
          <a href="#features" className="btn btn-primary">View Features →</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="dashboard-preview">
          <div className="dashboard-header">
            <div className="dashboard-dot"></div>
            <div className="dashboard-dot"></div>
            <div className="dashboard-dot"></div>
          </div>
          <div className="dashboard-body">
            <div className="dashboard-stats">
              <div className="stat-card green">
                <div className="stat-label">आज को बिक्री</div>
                <div className="stat-value">रू 45,200</div>
              </div>
              <div className="stat-card orange">
                <div className="stat-label">लिनु पर्ने</div>
                <div className="stat-value">रू 1,23,500</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">आज को खर्च</div>
                <div className="stat-value">रू 12,800</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">दिनु पर्ने</div>
                <div className="stat-value">रू 67,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
