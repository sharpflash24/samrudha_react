import { TreesIcon as Plant, Droplet, Bug, BarChart } from "lucide-react"
import "./services.css"
import { Link } from "react-router-dom";

const services = [
    {
        title: "Optimal Crop Recommendation",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%2023.07.21_8c34aec5.jpg-8BJMTzAwNI7hRBQ2iWoJUlEpn95FNW.jpeg",
        description: "Get AI-powered recommendations for optimal crop selection based on soil and climate conditions.",
        icon: Plant,
        link: "./service/crop-recommendation"
    },
    {
        title: "Fertilizer Recommendation",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%2023.07.05_f91a8524.jpg-20w2O6ayM1WpgnHj2Jl0zgS29vNhtB.jpeg",
        description: "Receive precise fertilizer recommendations based on soil analysis and crop requirements.",
        icon: Droplet,
        link: "./service/fertilizer-recommendation"
    },
    {
        title: "Crop Disease Diagnosis",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%2023.07.16_635dcfa5.jpg-ENk2e56AoivdysR8MeRjNxblkQ2aIW.jpeg",
        description: "Early detection and diagnosis of crop diseases using advanced image recognition.",
        icon: Bug,
        link: "./service/disease-diagnosis"
    },
    {
        title: "Yield Prediction",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%2023.07.29_4f24836a.jpg-mWN50QwgTxIpENl160RasNrCTkYZ39.jpeg",
        description: "Accurate yield predictions and optimal harvest timing recommendations.",
        icon: BarChart,
        link: "./service/yield-prediction"
    },
    ]

    export default function Services() {
    return (
        <section className="services" id="services">
        <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
            {services.map((service, index) => {
                const Icon = service.icon
                return (
                <div key={index} className="service-card">
                    <div className="service-image">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} />
                    <div className="service-icon">
                        <Icon size={24} />
                    </div>
                    </div>
                    <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={service.link}>
                        <button className="btn btn-primary">Learn More</button>
                    </Link>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        </section>
    )
}