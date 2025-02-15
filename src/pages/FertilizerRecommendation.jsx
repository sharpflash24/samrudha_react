import React, { useState } from 'react';

const FertilizerRecommendation = () => {
  const [formData, setFormData] = useState({
    moisture: '',
    temperature: '',
    humidity: '',
    rainfall: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicCarbon: '',
    phLevel: '',
    soilType: '',
    cropType: ''
  });
  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    // For now, we'll just set a sample recommendation
    setRecommendation(`Based on the soil conditions and ${formData.cropType}:
      We recommend using a balanced NPK fertilizer (10-10-10).
      Apply 200 kg/ha split into three applications throughout the growing season.
      
      Current soil conditions:
      - N: ${formData.nitrogen} mg/kg
      - P: ${formData.phosphorus} mg/kg
      - K: ${formData.potassium} mg/kg`);
  };

  const fetchWeather = async () => {
    // Implement weather fetching logic here
    console.log('Fetching weather...');
  };

  return (
    <div className="container">
      <h1 className="title">Fertilizer Recommendation</h1>
      
      <div className="image-container">
        <img src="https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fertilizer Recommendation" className="header-image" />
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          {Object.keys(formData).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              {['soilType', 'cropType'].includes(key) ? (
                <select id={key} value={formData[key]} onChange={handleChange} required>
                  <option value="">Select {key.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                  {key === 'soilType' ? (
                    <>
                      <option value="clay">Clay</option>
                      <option value="sandy">Sandy</option>
                      <option value="loamy">Loamy</option>
                      <option value="black">Black</option>
                      <option value="red">Red</option>
                    </>
                  ) : (
                    <>
                      <option value="rice">Rice</option>
                      <option value="wheat">Wheat</option>
                      <option value="maize">Maize</option>
                      <option value="cotton">Cotton</option>
                      <option value="sugarcane">Sugarcane</option>
                    </>
                  )}
                </select>
              ) : (
                <input
                  type="number"
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  step={key === 'phLevel' ? '0.1' : '0.01'}
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
          <button type="submit" className="submit-btn">Get Fertilizer Recommendation</button>
        </form>
      </div>

      {recommendation && (
        <div className="card result-card">
          <h2>Recommended Fertilizer</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default FertilizerRecommendation;