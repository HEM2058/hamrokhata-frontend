import React from 'react';

const Pricing: React.FC = () => {
  const features = [
    'Unlimited Sales & Expense entries',
    'Unlimited Customers & Vendors',
    'Party-wise Khata (Ledger)',
    'WhatsApp Payment Reminders',
    'VAT Invoice & Reports',
    'Bikram Sambat Calendar',
    'Excel Export',
    '3 Users per Business',
    'Mobile Responsive',
    'Nepali & English Interface'
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">Pricing</span>
        <h2>Simple, Affordable Pricing</h2>
        <p>One plan with everything included. No hidden fees.</p>
      </div>
      <div className="pricing-card">
        <div className="pricing-header">
          <h3>Business Plan</h3>
          <p>Everything your business needs</p>
        </div>
        <div className="price-tag">
          <div className="price-amount"><span>रू</span> 1,500</div>
          <div className="price-period">per month</div>
        </div>
        <div className="pricing-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-cta">
          <a href="#" className="btn btn-accent">Start 14-Day Free Trial →</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
