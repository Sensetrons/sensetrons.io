// src/components/HomePage.tsx
import React from 'react';
import './HomePage.css'; // Optional: for styling

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Sensetrons</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h2>Welcome to Sensetrons</h2>
                    <p>Your source for advanced sensor technology.</p>
                    <button>Get Started</button>
                </section>
                <section id="about">
                    <h2>About Us</h2>
                    <p>Information about Sensetrons...</p>
                </section>
                <section id="products">
                    <h2>Our Products</h2>
                    <p>Details about products...</p>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Contact information...</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Sensetrons</p>
            </footer>
        </div>
    );
};

export default HomePage;
