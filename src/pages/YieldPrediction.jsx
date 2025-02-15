import React, { useState } from 'react';

const YieldPrediction = () => {
  const [formData, setFormData] = useState({
    longitude: '',
    latitude: '',
    soilMoisture: '',
    rainfall: '',
    temperature: '',
    cropType: ''
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    // For now, we'll just set a sample prediction
    setPrediction(`Based on the provided conditions:
      Location: (${formData.longitude}, ${formData.latitude})
      Crop: ${formData.cropType}
      
      Predicted yield: 3.5 tonnes per hectare
      
      Factors considered:
      - Soil Moisture: ${formData.soilMoisture}%
      - Rainfall: ${formData.rainfall}mm
      - Temperature: ${formData.temperature}°C`);
  };

  const fetchWeather = async () => {
    // Implement weather fetching logic here
    console.log('Fetching weather...');
  };

  return (
    <div className="container">
      <h1 className="title">Yield Prediction</h1>
      
      <div className="image-container">
        <img src="https://images.pexels.com/photos/265242/pexels-photo-265242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Yield Prediction" className="header-image" />
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          {Object.keys(formData).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              {key === 'cropType' ? (
                <select id={key} value={formData[key]} onChange={handleChange} required>
                  <option value="">Select crop type</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="maize">Maize</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                </select>
              ) : (
                <input
                  type="number"
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  step={['longitude', 'latitude'].includes(key) ? '0.000001' : '0.01'}
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
          <button type="submit" className="submit-btn">Predict Yield</button>
        </form>
      </div>

      {prediction && (
        <div className="card result-card">
          <h2>Predicted Yield</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default YieldPrediction;