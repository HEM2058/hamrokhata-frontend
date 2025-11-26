import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <div className="hero-badge">
          🇳🇵 नेपालमा बनाइएको
        </div>
        <h1>
          तपाईंको व्यापारको लागि <span>सजिलो खाता</span>
        </h1>
        <p className="hero-nepali">सरल र शक्तिशाली हिसाब किताब</p>
        <p>
          बिक्री, खर्च र पार्टी खाता सजिलैसँग व्यवस्थापन गर्नुहोस्। भ्याट सपोर्ट,
          बिक्रम संवत पात्रो र व्हाट्सएप रिमाइन्डर सहित।
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-accent">
            १४ दिन फ्री ट्रायल →
          </a>
          <a href="#features" className="btn btn-outline">
            सुविधाहरू हेर्नुहोस्
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">१००+</div>
            <div className="hero-stat-label">खुशी ग्राहकहरू</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">९९%</div>
            <div className="hero-stat-label">सन्तुष्टि दर</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">२४/७</div>
            <div className="hero-stat-label">सपोर्ट</div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="dashboard-preview">
          <div className="dashboard-header">
            <div className="dashboard-dots">
              <div className="dashboard-dot"></div>
              <div className="dashboard-dot"></div>
              <div className="dashboard-dot"></div>
            </div>
            <div className="dashboard-title">📊 डैशबोर्ड</div>
          </div>
          <div className="dashboard-body">
            <div className="dashboard-stats">
              <div className="stat-card green">
                <div className="stat-label">💰 आज को बिक्री</div>
                <div className="stat-value">रू 45,200</div>
              </div>
              <div className="stat-card orange">
                <div className="stat-label">📥 लिनु पर्ने</div>
                <div className="stat-value">रू 1,23,500</div>
              </div>
              <div className="stat-card blue">
                <div className="stat-label">🛒 आज को खर्च</div>
                <div className="stat-value">रू 12,800</div>
              </div>
              <div className="stat-card red">
                <div className="stat-label">📤 दिनु पर्ने</div>
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
