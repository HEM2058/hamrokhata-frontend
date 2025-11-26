import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  businessName: string;
  ownerName: string;
  panNumber: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  trialStartDate: string;
  trialEndDate: string;
  subscriptionStatus: string;
  createdAt: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Load user data from localStorage
    const storedData = localStorage.getItem('hamroKhataUser');
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);

      // Calculate days left
      const endDate = new Date(data.trialEndDate);
      const today = new Date();
      const diffTime = endDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    } else {
      // If no user data, redirect to signup
      navigate('/signup');
    }
  }, [navigate]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const getBusinessTypeLabel = (type: string) => {
    const types: { [key: string]: string } = {
      retail: 'खुद्रा (Retail)',
      wholesale: 'थोक (Wholesale)',
      service: 'सेवा (Service)',
      manufacturing: 'उत्पादन (Manufacturing)',
      other: 'अन्य (Other)'
    };
    return types[type] || type;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('hamroKhataUser');
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <div className="header-left">
            <div className="logo-icon">📒</div>
            <div>
              <h1>हाम्रो खाता</h1>
              <p>मेरो प्रोफाइल</p>
            </div>
          </div>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            ← गृह पृष्ठ
          </button>
        </div>

        {/* Trial Status Banner */}
        <div className={`trial-banner ${daysLeft <= 2 ? 'trial-ending' : ''}`}>
          <div className="trial-banner-content">
            <div className="trial-icon">
              {daysLeft > 0 ? '🎉' : '⚠️'}
            </div>
            <div className="trial-info-text">
              {daysLeft > 0 ? (
                <>
                  <h3>फ्री ट्रायल सक्रिय</h3>
                  <p>तपाईंको ट्रायल अवधि <strong>{daysLeft} दिन</strong> बाँकी छ</p>
                </>
              ) : (
                <>
                  <h3>ट्रायल अवधि समाप्त</h3>
                  <p>कृपया सदस्यता लिनुहोस् जारी राख्नको लागि</p>
                </>
              )}
            </div>
          </div>
          <div className="trial-countdown">
            <div className="countdown-number">{daysLeft}</div>
            <div className="countdown-label">दिन बाँकी</div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="profile-content">
          <div className="profile-card">
            <div className="card-header">
              <h2>📋 व्यवसायको विवरण</h2>
              <button className="btn-edit">✏️ सम्पादन गर्नुहोस्</button>
            </div>
            <div className="card-body">
              <div className="info-grid">
                <div className="info-item">
                  <label>व्यवसायको नाम</label>
                  <p>{userData.businessName}</p>
                </div>
                <div className="info-item">
                  <label>मालिकको नाम</label>
                  <p>{userData.ownerName}</p>
                </div>
                <div className="info-item">
                  <label>PAN नम्बर</label>
                  <p className="pan-number">🔒 {userData.panNumber}</p>
                </div>
                <div className="info-item">
                  <label>व्यवसायको प्रकार</label>
                  <p>{getBusinessTypeLabel(userData.businessType)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <h2>📞 सम्पर्क विवरण</h2>
            </div>
            <div className="card-body">
              <div className="info-grid">
                <div className="info-item">
                  <label>इमेल ठेगाना</label>
                  <p>📧 {userData.email}</p>
                </div>
                <div className="info-item">
                  <label>फोन नम्बर</label>
                  <p>📱 {userData.phone}</p>
                </div>
                <div className="info-item">
                  <label>ठेगाना</label>
                  <p>📍 {userData.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header">
              <h2>📊 सदस्यता विवरण</h2>
            </div>
            <div className="card-body">
              <div className="info-grid">
                <div className="info-item">
                  <label>सदस्यता स्थिति</label>
                  <p>
                    <span className={`status-badge ${userData.subscriptionStatus}`}>
                      {userData.subscriptionStatus === 'trial' ? '🎁 फ्री ट्रायल' : userData.subscriptionStatus}
                    </span>
                  </p>
                </div>
                <div className="info-item">
                  <label>ट्रायल सुरु मिति</label>
                  <p>{formatDate(userData.trialStartDate)}</p>
                </div>
                <div className="info-item">
                  <label>ट्रायल समाप्ति मिति</label>
                  <p>{formatDate(userData.trialEndDate)}</p>
                </div>
                <div className="info-item">
                  <label>खाता बनाइएको</label>
                  <p>{formatDate(userData.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription CTA */}
          {daysLeft <= 3 && (
            <div className="subscription-cta">
              <h3>🎯 सदस्यता लिनुहोस् र जारी राख्नुहोस्</h3>
              <p>तपाईंको ट्रायल अवधि समाप्त हुन लागेको छ। निरन्तर सेवा प्राप्त गर्न सदस्यता लिनुहोस्।</p>
              <div className="cta-buttons">
                <button className="btn btn-accent btn-large" onClick={() => navigate('/#pricing')}>
                  सदस्यता योजना हेर्नुहोस् →
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="profile-actions">
            <button className="btn btn-outline btn-danger" onClick={handleLogout}>
              🚪 लगआउट गर्नुहोस्
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
