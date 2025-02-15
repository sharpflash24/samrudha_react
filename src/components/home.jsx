import "./home.css"

export default function Hero() {
    return (
        <div
        className="hero"
        style={{
            // backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%2023.07.25_ebcacdca.jpg-opBr2oKLDxFmUoFziZcCQkhjMOLj4h.jpeg)`,
        }}
        >
        <div className="hero-overlay">
            <div className="container">
            <div className="hero-content">
                <p>"Samrudha is an AI-driven platform dedicated to transforming traditional farming methods into smart, 
                    data-driven approaches. By combining cutting-edge technologies with real-world agricultural expertise, 
                    we provide farmers with the tools they need to make informed decisions and maximize productivity."
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}