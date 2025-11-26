import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const dashboards = [
    {
      title: '📊 डैशबोर्ड - दैनिक व्यवस्थापन',
      subtitle: 'Daily Administrative View',
      type: 'stats',
      content: [
        { label: '💰 आज को बिक्री', value: 'रू 45,200', color: 'green', icon: '↗' },
        { label: '📥 लिनु पर्ने', value: 'रू 1,23,500', color: 'orange', icon: '⚠' },
        { label: '🛒 आज को खर्च', value: 'रू 12,800', color: 'blue', icon: '↘' },
        { label: '📤 दिनु पर्ने', value: 'रू 67,000', color: 'red', icon: '!' }
      ]
    },
    {
      title: '📋 पार्टी खाता सूची',
      subtitle: 'Party Ledger List',
      type: 'list',
      content: [
        { name: 'राम बहादुर श्रेष्ठ', amount: 'रू 15,500', status: 'लिनु पर्ने', color: 'orange', reminderSent: true },
        { name: 'सीता देवी कार्की', amount: 'रू 8,200', status: 'लिनु पर्ने', color: 'orange', reminderSent: false },
        { name: 'ABC Suppliers Ltd', amount: 'रू 25,000', status: 'दिनु पर्ने', color: 'red', reminderSent: false },
        { name: 'हरि प्रसाद तामाङ', amount: 'रू 12,300', status: 'लिनु पर्ने', color: 'orange', reminderSent: true },
        { name: 'XYZ Trading', amount: 'रू 5,800', status: 'तिरेको', color: 'green', reminderSent: false }
      ]
    },
    {
      title: '📈 मासिक रिपोर्ट र विश्लेषण',
      subtitle: 'Monthly Reports & Analytics',
      type: 'chart',
      content: [
        { label: 'कुल बिक्री', value: 'रू 4,52,000', percent: '+15%', color: 'green' },
        { label: 'कुल खर्च', value: 'रू 2,85,000', percent: '+8%', color: 'blue' },
        { label: 'शुद्ध नाफा', value: 'रू 1,67,000', percent: '+23%', color: 'orange' },
        { label: 'भ्याट सङ्कलन', value: 'रू 58,760', percent: '13%', color: 'info' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % dashboards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderDashboardContent = (dashboard: typeof dashboards[0]) => {
    if (dashboard.type === 'stats') {
      return (
        <div className="dashboard-stats">
          {dashboard.content.map((stat: any, i: number) => (
            <div key={i} className={`stat-card ${stat.color}`}>
              <div className="stat-icon-badge">{stat.icon}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      );
    }

    if (dashboard.type === 'list') {
      return (
        <div className="dashboard-list">
          {dashboard.content.map((item: any, i: number) => (
            <div key={i} className="list-item">
              <div className="list-item-avatar">{item.name.charAt(0)}</div>
              <div className="list-item-info">
                <div className="list-item-name">
                  {item.name}
                  {item.reminderSent && (
                    <span className="reminder-badge" title="रिमाइन्डर आज पठाइयो">
                      ✓ WhatsApp
                    </span>
                  )}
                </div>
                <div className={`list-item-status ${item.color}`}>{item.status}</div>
              </div>
              <div className="list-item-amount">{item.amount}</div>
            </div>
          ))}
        </div>
      );
    }

    if (dashboard.type === 'chart') {
      return (
        <div className="dashboard-chart">
          {dashboard.content.map((item: any, i: number) => (
            <div key={i} className={`chart-bar ${item.color}`}>
              <div className="chart-bar-header">
                <span className="chart-bar-label">{item.label}</span>
                <span className="chart-bar-percent">{item.percent}</span>
              </div>
              <div className="chart-bar-value">{item.value}</div>
              <div className="chart-bar-graph">
                <div
                  className="chart-bar-fill"
                  style={{ width: `${75 + i * 5}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

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
            ७ दिन फ्री ट्रायल →
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
        <div className="dashboard-carousel">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className={`dashboard-preview ${index === activeSlide ? 'active' : ''} dashboard-${dashboard.type}`}
              style={{
                opacity: index === activeSlide ? 1 : 0,
                transform: index === activeSlide ? 'translateX(0)' : 'translateX(100%)',
                position: index === activeSlide ? 'relative' : 'absolute',
                transition: 'all 0.6s ease-in-out',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <div className="dashboard-dot"></div>
                  <div className="dashboard-dot"></div>
                  <div className="dashboard-dot"></div>
                </div>
                <div className="dashboard-title-group">
                  <div className="dashboard-title">{dashboard.title}</div>
                  <div className="dashboard-subtitle">{dashboard.subtitle}</div>
                </div>
              </div>
              <div className="dashboard-body">
                {renderDashboardContent(dashboard)}
              </div>
            </div>
          ))}

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {dashboards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Navigation */}
          <button
            className="carousel-nav prev"
            onClick={() => setActiveSlide((prev) => (prev - 1 + dashboards.length) % dashboards.length)}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="carousel-nav next"
            onClick={() => setActiveSlide((prev) => (prev + 1) % dashboards.length)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
