// src/App.tsx
import React from 'react';
import HomePage from './components/Home';
import Projects from './components/Projects';
import About from './components/About';


const App: React.FC = () => {
    return (
        <div className="App">
            <HomePage />
            <Projects />
            <About />
        </div>
    );
};

export default App;
