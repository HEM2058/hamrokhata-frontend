import React from 'react';

const WhatsAppSection: React.FC = () => {
  return (
    <section className="whatsapp-section">
      <div className="whatsapp-container">
        <div className="whatsapp-content">
          <h2>
            अब <span>व्हाट्सएप</span> मा भुक्तानी रिमाइन्डर पठाउनुहोस्
          </h2>
          <p>
            तपाईंको ग्राहकहरूको व्हाट्सएपमा सिधै भुक्तानी रिमाइन्डर पठाउनुहोस्।
            एक क्लिक, व्यावसायिक सन्देश, राम्रो सङ्कलन दर।
          </p>
          <div className="whatsapp-features">
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>एक क्लिकमा "लिनु पर्ने" को लागि रिमाइन्डर पठाउनुहोस्</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>व्यावसायिक नेपाली/अंग्रेजी सन्देश टेम्प्लेट</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>बिल विवरण स्वचालित रूपमा समावेश गर्नुहोस्</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>कुन रिमाइन्डर पठाइयो ट्र्याक गर्नुहोस्</span>
            </div>
          </div>
        </div>
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="wa-header">
              <div className="wa-avatar">HK</div>
              <div className="wa-info">
                <div className="wa-name">हाम्रो खाता</div>
                <div className="wa-status">व्यवसाय</div>
              </div>
            </div>
            <div className="wa-chat">
              <div className="wa-message received">
                <div>नमस्ते राम बहादुर जी! 🙏</div>
                <div style={{ marginTop: '8px' }}>ABC Traders बाट याद दिलाउँदछौं।</div>
                <div style={{ marginTop: '8px' }}>तपाईंको बाँकी रकम: <strong>रू 15,500</strong></div>
                <div style={{ marginTop: '8px' }}>
                  बिल नम्बर: #2081-045
                  <br />
                  मिति: २०८१/०८/१५
                </div>
                <div className="wa-time">10:30 AM ✓✓</div>
              </div>
              <div className="wa-message sent">
                <div>हजुर, आज नै तिर्छु। धन्यवाद! 🙏</div>
                <div className="wa-time">10:32 AM ✓✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
