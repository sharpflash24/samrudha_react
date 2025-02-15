"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar.jsx"
import Hero from "./components/home.jsx"
import Services from "./components/service.jsx"
import Dashboard from "./components/Dashboard.jsx";
import CropRecommendation from "./pages/CropRecommendation.jsx"
import FertilizerRecommendation from "./pages/FertilizerRecommendation.jsx"
import DiseaseDiagnosis from "./pages/CropDiseaseDiagnosis.jsx"
import YieldForecast from "./pages/YieldPrediction.jsx"
import "./global/global.css"

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }

    return (
        <Router>
            <div className="layout">
                <Sidebar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
                <main className="main-content">
                    
                <div className="header-title">
                    <img
                    src="/samrudha_logo-removebg-preview.png"
                    alt="Samrudha Logo" className="logo-head"/>
                    <h1>Samrudha</h1>
                    </div>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Services />
                                <Dashboard />
                            </>
                        } />
                        <Route path="/services" element={<Services />} />
                        <Route path="/service/crop-recommendation" element={<CropRecommendation />} />
                        <Route path="/service/fertilizer-recommendation" element={<FertilizerRecommendation />} />
                        <Route path="/service/disease-diagnosis" element={<DiseaseDiagnosis />} />
                        <Route path="/service/yield-prediction" element={<YieldForecast />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
