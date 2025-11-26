import React from 'react';

const WhatsAppSection: React.FC = () => {
  return (
    <section className="whatsapp-section">
      <div className="whatsapp-container">
        <div className="whatsapp-content">
          <h2>Never Chase Payments Again with <span>WhatsApp</span> Reminders</h2>
          <p>Send payment reminders directly to your customers' WhatsApp. One click, professional message, better collection rates.</p>
          <div className="whatsapp-features">
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>Send reminder for "Linu Parney" with one click</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>Professional Nepali/English message templates</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>Include invoice details automatically</span>
            </div>
            <div className="wa-feature">
              <div className="wa-check">✓</div>
              <span>Track which reminders were sent</span>
            </div>
          </div>
        </div>
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="wa-header">
              <div className="wa-avatar">MK</div>
              <div>
                <div className="wa-name">Mero Khata</div>
                <div className="wa-status">Business</div>
              </div>
            </div>
            <div className="wa-chat">
              <div className="wa-message received">
                <div>नमस्ते राम बहादुर जी! 🙏</div>
                <div style={{ marginTop: '8px' }}>ABC Traders बाट याद दिलाउँदछौं।</div>
                <div style={{ marginTop: '8px' }}>तपाईंको बाँकी रकम: <strong>रू 15,500</strong></div>
                <div style={{ marginTop: '8px' }}>Invoice #2081-045<br />मिति: २०८१/०८/१५</div>
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
