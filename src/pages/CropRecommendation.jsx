import React, { useState } from 'react';

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    rainfall: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicCarbon: '',
    ph: '',
    soilType: ''
  });
  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    // For now, we'll just set a sample recommendation
    setRecommendation(`Based on the provided conditions:
      - Temperature: ${formData.temperature}°C
      - Humidity: ${formData.humidity}%
      - Soil Type: ${formData.soilType}
      
      We recommend growing Rice as it is well-suited for these conditions.`);
  };

  const fetchWeather = async () => {
    // Implement weather fetching logic here
    console.log('Fetching weather...');
  };

  return (
    <div className="container">
      <h1 className="title">Optimal Crop Recommendation</h1>
      
      <div className="image-container">
        <img src="https://images.pexels.com/photos/96417/pexels-photo-96417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Crop Recommendation" className="header-image" />
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          {Object.keys(formData).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              {key === 'soilType' ? (
                <select id={key} value={formData[key]} onChange={handleChange} required>
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                </select>
              ) : (
                <input
                  type="number"
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  step={key === 'ph' ? '0.1' : '0.01'}
                  placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  required
                />
              )}
            </div>
          ))}
          <div className="weather-data">
            <button onClick={fetchWeather} type="button" className="weather-button">Get Weather</button>
            <div id="getWeather"></div>
          </div>
          <button type="submit" className="submit-btn">Get Recommendation</button>
        </form>
      </div>

      {recommendation && (
        <div className="card result-card">
          <h2>Recommended Crop</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;