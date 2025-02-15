import axios from "axios";

// Set your FastAPI backend URL
const BASE_URL = "http://127.0.0.1:8000"; 

// Function to get crop recommendations
export const getCropRecommendation = async (inputData) => {
    try {
        const response = await axios.post(`${BASE_URL}/crop/predict_crop`, inputData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching crop recommendation:", error);
        return null;
    }
};

// Function to get fertilizer recommendation
export const getFertilizerRecommendation = async (inputData) => {
    try {
        const response = await axios.post(`${BASE_URL}/fertilizer`, inputData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching fertilizer recommendation:", error.response?.data || error.message);
        throw new Error("Failed to fetch fertilizer recommendation.");
    }
};

// Function to get yield prediction
export const getYieldPrediction = async (inputData) => {
    try {
        const response = await axios.post(`${BASE_URL}/yield`, inputData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching yield prediction:", error.response?.data || error.message);
        throw new Error("Failed to fetch yield prediction.");
    }
};

// Function to upload image for crop disease diagnosis
export const uploadCropImage = async (imageFile) => {
    try {
        let formData = new FormData();
        formData.append("file", imageFile);

        const response = await axios.post(`${BASE_URL}/disease/predict`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error.response?.data || error.message);
        throw new Error("Failed to upload image.");
    }
};