import React, { useState } from "react";
import "./home.css";
import Chatbot from "../components/Chatbot";
import Footer from "./Footer"; // Add this import

export default function Hero() {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div className="page-container"> {/* Add this wrapper */}
            <div className="hero">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="hero-content">
                            <p>
                                "Samrudha is an AI-driven platform dedicated to transforming traditional farming methods into smart, 
                                data-driven approaches. By combining cutting-edge technologies with real-world agricultural expertise, 
                                we provide farmers with the tools they need to make informed decisions and maximize productivity."
                            </p>
                            <button className="chat-button" onClick={() => setShowChatbot(!showChatbot)}>
                                Chat with Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showChatbot && (
                <div className="chatbot-popup">
                    <Chatbot />
                </div>
            )}
        </div>
    );
}