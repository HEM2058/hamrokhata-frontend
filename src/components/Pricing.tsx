import React from 'react';

const Pricing: React.FC = () => {
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
    { text: 'नेपाली र अंग्रेजी इन्टरफेस', english: 'Nepali & English Interface' }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">मूल्य निर्धारण</span>
        <h2>
          सरल र <span>किफायती</span> मूल्य
        </h2>
        <p>सबै कुरा समावेश भएको एक योजना। कुनै लुकेको शुल्क छैन।</p>
      </div>
      <div className="pricing-card">
        <div className="pricing-badge">🔥 सबैभन्दा लोकप्रिय</div>
        <div className="pricing-header">
          <h3>व्यवसाय योजना</h3>
          <p>तपाईंको व्यवसायलाई चाहिने सबै कुरा</p>
        </div>
        <div className="price-tag">
          <div className="price-amount">
            <span className="currency">रू</span>
            1,500
          </div>
          <div className="price-period">प्रति महिना</div>
          <div className="price-note">✨ पहिलो महिना ५०% छुट</div>
        </div>
        <div className="pricing-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-cta">
          <a href="#" className="btn btn-accent">
            १४ दिन फ्री ट्रायल सुरु गर्नुहोस् →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
