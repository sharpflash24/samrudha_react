import React, { useState } from 'react';

const CropDiseaseDiagnosis = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');

//   const handleImageChange = (e  = useState(null);
//   const [diagnosis, setDiagnosis] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    // For now, we'll just set a sample diagnosis
    setDiagnosis(`Based on the uploaded image analysis:
      The crop appears to show symptoms of Leaf Blight.
      
      Recommended treatment:
      1. Remove infected leaves
      2. Apply appropriate fungicide
      3. Improve air circulation around plants`);
  };

  return (
    <div className="container">
      <h1 className="title">Crop Disease Diagnosis</h1>
      
      <div className="image-container">
        <img src="https://images.pexels.com/photos/10479415/pexels-photo-10479415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Disease Diagnosis" className="header-image" />
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group full-width">
            <label htmlFor="cropImage">Upload Crop Image</label>
            <div className="image-upload-container">
              <input
                type="file"
                id="cropImage"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              <div className="image-preview">
                {selectedImage ? (
                  <img src={selectedImage || "/placeholder.svg"} alt="Preview" />
                ) : (
                  <p>No image selected</p>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">Identify Disease</button>
        </form>
      </div>

      {diagnosis && (
        <div className="card result-card">
          <h2>Disease Diagnosis</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default CropDiseaseDiagnosis;