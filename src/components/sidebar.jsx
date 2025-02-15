"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Home, Leaf, Info, Phone, ChevronRight } from "lucide-react"
import "./sidebar.css"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const [isDark, setIsDark] = useState(false)
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
        const now = new Date()
        setCurrentTime(now.toLocaleTimeString())
        }
        updateTime()
        const timer = setInterval(updateTime, 1000)
        return () => clearInterval(timer)
    }, [])

    const toggleTheme = () => {
        setIsDark(prevIsDark => {
            const newTheme = !prevIsDark;
            if (newTheme) {
                document.documentElement.classList.add("dark-theme");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark-theme");
                localStorage.setItem("theme", "light");
            }
            return newTheme;
        });
    };

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark-theme");
        }
    }, []);    

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight size={20} />
        </div>

        <div className="sidebar-header">
            <div className="logo-container">
            <img
                src="/samrudha_logo-removebg-preview.png"
                alt="Samrudha Logo"
            />
            <h1>Samrudha</h1>
            </div>
            <div className="tagline"><h6>Harnessing AI to Cultivate Abundance</h6></div>
        </div>

        <div className="user-profile">
            <div className="user-avatar">
            <img src="/IMG_20250212_214948.jpg" alt="User Avatar" />
            <span className="status-badge online"></span>
            </div>
            <div className="user-info">
            <h3>Kishan Yadav</h3>
            {/* <p>Premium Member</p> */}
            </div>
            <div className="user-stats">
            <div className="stat">
                <span className="stat-value">5</span>
                <span className="stat-label">Crops</span>
            </div>
            <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">Farms</span>
            </div>
            </div>
        </div>

        <nav className="sidebar-nav">
            <ul>
            <li>
                <a href="#home" className="nav-link">
                <Home size={20} />
                <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#services" className="nav-link">
                <Leaf size={20} />
                <span>Services</span>
                </a>
            </li>
            <li>
                <a href="#about" className="nav-link">
                <Info size={20} />
                <span>About</span>
                </a>
            </li>
            <li>
                <a href="#contact" className="nav-link">
                <Phone size={20} />
                <span>Contact</span>
                </a>
            </li>
            </ul>
        </nav>

        <div className="sidebar-footer">
            <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </div>
            <div className="time-display">{currentTime}</div>
        </div>
        </div>
    )
}