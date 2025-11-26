import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    panNumber: '',
    email: '',
    phone: '',
    address: '',
    businessType: 'retail'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate trial end date (7 days from now)
    const trialEndDate = new Date();
    trialEndDate.setDate(trialEndDate.getDate() + 7);

    // Save user data to localStorage
    const userData = {
      ...formData,
      trialStartDate: new Date().toISOString(),
      trialEndDate: trialEndDate.toISOString(),
      subscriptionStatus: 'trial',
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('hamroKhataUser', JSON.stringify(userData));

    // Navigate to profile/dashboard
    navigate('/profile');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <div className="logo-section">
            <div className="logo-icon">📒</div>
            <h1>हाम्रो खाता</h1>
          </div>
          <h2>७ दिन फ्री ट्रायल सुरु गर्नुहोस्</h2>
          <p>तपाईंको व्यवसायको विवरण भर्नुहोस्</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>📋 व्यवसायको विवरण</h3>

            <div className="form-group">
              <label htmlFor="businessName">
                व्यवसायको नाम <span className="required">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="उदाहरण: ABC Trading Pvt. Ltd."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ownerName">
                मालिकको नाम <span className="required">*</span>
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="उदाहरण: राम बहादुर श्रेष्ठ"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="panNumber">
                PAN नम्बर <span className="required">*</span>
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="उदाहरण: 123456789"
                pattern="[0-9]{9}"
                title="PAN नम्बर ९ अंकको हुनुपर्छ"
                required
              />
              <small className="help-text">९ अंकको PAN नम्बर प्रविष्ट गर्नुहोस्</small>
            </div>

            <div className="form-group">
              <label htmlFor="businessType">
                व्यवसायको प्रकार <span className="required">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="retail">खुद्रा (Retail)</option>
                <option value="wholesale">थोक (Wholesale)</option>
                <option value="service">सेवा (Service)</option>
                <option value="manufacturing">उत्पादन (Manufacturing)</option>
                <option value="other">अन्य (Other)</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h3>📞 सम्पर्क विवरण</h3>

            <div className="form-group">
              <label htmlFor="email">
                इमेल ठेगाना <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="उदाहरण: business@example.com"
                required
              />
              <small className="help-text">मासिक रिपोर्ट यही इमेलमा पठाइनेछ</small>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                फोन नम्बर <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="उदाहरण: 9801234567"
                pattern="[0-9]{10}"
                title="१० अंकको फोन नम्बर प्रविष्ट गर्नुहोस्"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">
                ठेगाना <span className="required">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="उदाहरण: काठमाडौं, नेपाल"
                required
              />
            </div>
          </div>

          <div className="trial-info">
            <div className="trial-badge">🎉 ७ दिन फ्री ट्रायल</div>
            <ul>
              <li>✓ सबै सुविधाहरू निःशुल्क प्रयोग गर्नुहोस्</li>
              <li>✓ कुनै क्रेडिट कार्ड आवश्यक छैन</li>
              <li>✓ जुनसुकै बेला रद्द गर्न सक्नुहुन्छ</li>
            </ul>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-accent btn-large">
              फ्री ट्रायल सुरु गर्नुहोस् →
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => navigate('/')}
            >
              रद्द गर्नुहोस्
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
