import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'semi-annual' | 'annual'>('monthly');

  const features = [
    { text: 'असीमित बिक्री र खर्च प्रविष्टि', english: 'Unlimited Sales & Expenses' },
    { text: 'असीमित ग्राहक र आपूर्तिकर्ता', english: 'Unlimited Customers & Vendors' },
    { text: 'पार्टी-वार खाता (लेजर)', english: 'Party-wise Ledger' },
    { text: 'व्हाट्सएप भुक्तानी रिमाइन्डर', english: 'WhatsApp Payment Reminders' },
    { text: 'भ्याट बिल र रिपोर्ट', english: 'VAT Invoice & Reports' },
    { text: 'बिक्रम संवत पात्रो', english: 'Bikram Sambat Calendar' },
    { text: 'एक्सेल एक्सपोर्ट', english: 'Excel Export' },
    { text: '३ प्रयोगकर्ता प्रति व्यवसाय', english: '3 Users per Business' },
    { text: 'मोबाइल फ्रेन्डली', english: 'Mobile Responsive' },
    { text: 'नेपाली र अंग्रेजी इन्टरफेस', english: 'Nepali & English Interface' },
    { text: 'मासिक व्यापार रिपोर्ट इमेल', english: 'Monthly Business Report Email', highlight: true },
    { text: 'प्राथमिकता सपोर्ट', english: 'Priority Support', highlight: true }
  ];

  const pricingPlans = {
    monthly: {
      price: 1500,
      period: 'प्रति महिना',
      periodEn: 'per month',
      total: 1500,
      discount: 0,
      badge: '💼 मासिक योजना'
    },
    'semi-annual': {
      price: 1350,
      period: 'प्रति महिना',
      periodEn: 'per month',
      total: 8100,
      discount: 10,
      badge: '⭐ अर्धवार्षिक योजना',
      note: '६ महिना - १०% छुट',
      popular: true
    },
    annual: {
      price: 1275,
      period: 'प्रति महिना',
      periodEn: 'per month',
      total: 15300,
      discount: 15,
      badge: '🏆 वार्षिक योजना',
      note: '१२ महिना - १५% छुट'
    }
  };

  const currentPlan = pricingPlans[billingCycle];

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">मूल्य निर्धारण</span>
        <h2>
          सरल र <span>किफायती</span> मूल्य
        </h2>
        <p>आफ्नो व्यवसायको आवश्यकता अनुसार योजना छान्नुहोस्। कुनै लुकेको शुल्क छैन।</p>
      </div>

      {/* Billing Cycle Selector */}
      <div className="billing-selector">
        <button
          className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('monthly')}
        >
          मासिक
          <span className="billing-en">Monthly</span>
        </button>
        <button
          className={`billing-option ${billingCycle === 'semi-annual' ? 'active' : ''}`}
          onClick={() => setBillingCycle('semi-annual')}
        >
          अर्धवार्षिक
          <span className="billing-en">Semi-Annual</span>
          <span className="discount-tag">१०% छुट</span>
        </button>
        <button
          className={`billing-option ${billingCycle === 'annual' ? 'active' : ''}`}
          onClick={() => setBillingCycle('annual')}
        >
          वार्षिक
          <span className="billing-en">Annual</span>
          <span className="discount-tag">१५% छुट</span>
        </button>
      </div>

      <div className="pricing-card">
        {currentPlan.popular && <div className="pricing-badge">🔥 सबैभन्दा लोकप्रिय</div>}
        <div className="pricing-header">
          <h3>{currentPlan.badge}</h3>
          <p>तपाईंको व्यवसायलाई चाहिने सबै कुरा</p>
        </div>
        <div className="price-tag">
          <div className="price-amount">
            <span className="currency">रू</span>
            {currentPlan.price.toLocaleString('ne-NP')}
          </div>
          <div className="price-period">{currentPlan.period}</div>
          {currentPlan.note && <div className="price-note">✨ {currentPlan.note}</div>}
          {currentPlan.total !== currentPlan.price && (
            <div className="price-total">
              कुल: रू {currentPlan.total.toLocaleString('ne-NP')}
              {billingCycle === 'semi-annual' ? ' / ६ महिना' : ' / १२ महिना'}
            </div>
          )}
        </div>
        <div className="pricing-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className={feature.highlight ? 'highlight' : ''}>
                <span className="check-icon">✓</span>
                <div className="feature-text">
                  <span>{feature.text}</span>
                  {feature.highlight && <span className="feature-badge">नयाँ</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-cta">
          <a href="#" className="btn btn-accent">
            ७ दिन फ्री ट्रायल सुरु गर्नुहोस् →
          </a>
          <p className="trial-note">कुनै क्रेडिट कार्ड आवश्यक छैन</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="pricing-info">
        <div className="info-card">
          <div className="info-icon">📧</div>
          <h4>मासिक व्यापार रिपोर्ट</h4>
          <p>तपाईंको व्यापार इमेलमा स्वचालित रूपमा पूर्ण रिपोर्ट पठाइन्छ</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🔄</div>
          <h4>नियमित अपडेट</h4>
          <p>नयाँ सुविधाहरू र सुधारहरू नियमित रूपमा थपिन्छन्</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🛡️</div>
          <h4>सुरक्षित र भरपर्दो</h4>
          <p>तपाईंको डाटा पूर्ण सुरक्षित र एन्क्रिप्टेड</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
