import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section">
                    <h3>Samrudha</h3>
                    <p>Transforming traditional farming with AI-driven solutions for smarter agriculture and better yields.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/service/crop-recommendation">Crop Recommendation</a></li>
                        <li><a href="/service/fertilizer-recommendation">Fertilizer Recommendation</a></li>
                        <li><a href="/service/disease-diagnosis">Disease Diagnosis</a></li>
                        <li><a href="/service/yield-prediction">Yield Prediction</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>📞 +91 45851646456</li>
                        <li>✉️ samrudha@gmail.com </li>
                        <li>📍 Indian Institute of Information Technology, Lucknow</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-section">
                    <h4>Stay Updated</h4>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Samrudha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;