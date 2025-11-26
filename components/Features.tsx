import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '💰',
      title: 'Sales & Income',
      nepali: 'बिक्री / आम्दानी',
      description: 'Create VAT invoices, track payments, manage customers. See who paid and who owes you at a glance.'
    },
    {
      icon: '🛒',
      title: 'Expenses & Purchases',
      nepali: 'खर्च / खरिद',
      description: 'Record every expense, attach bill photos, categorize spending. Know where your money goes.'
    },
    {
      icon: '📒',
      title: 'Party Ledger',
      nepali: 'पार्टी खाता',
      description: 'Complete khata for each customer and supplier. Running balance updated automatically.'
    },
    {
      icon: '📊',
      title: 'Linu Parney / Dinu Parney',
      nepali: 'लिनु पर्ने / दिनु पर्ने',
      description: 'See all receivables and payables in one place. Never forget who owes you money.'
    },
    {
      icon: '🗓️',
      title: 'Bikram Sambat Calendar',
      nepali: 'बि.सं. पात्रो',
      description: 'Work in Nepali dates naturally. Fiscal year from Shrawan to Ashad built-in.'
    },
    {
      icon: '📑',
      title: 'VAT Reports',
      nepali: 'भ्याट रिपोर्ट',
      description: 'Auto-calculate 13% VAT. Generate reports ready for IRD filing. PAN tracking included.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">Features</span>
        <h2>Everything You Need to Manage Your Khata</h2>
        <p>Simple, powerful tools designed for how Nepali businesses actually work</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p className="nepali-text">{feature.nepali}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
