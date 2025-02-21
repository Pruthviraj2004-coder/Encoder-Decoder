import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode preference from localStorage on mount
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        applyDarkMode(savedMode);
    }, []);

    // Function to apply dark mode changes globally
    const applyDarkMode = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        applyDarkMode(newMode);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="navbar-logo" style={{ width: '40px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-dark ms-3" onClick={toggleDarkMode}>
                        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
            </div>
        </nav>
    );
}
