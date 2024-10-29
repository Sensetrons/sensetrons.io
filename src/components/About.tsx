import React from 'react';
import './aboutpage.css';

const About: React.FC = () => {
  return (
    <div className="aboutpage">
      <header className="header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our website! We are dedicated to providing the best service to our customers.
          Our team works tirelessly to ensure quality and satisfaction in everything we do.
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Sensetrons. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
