import React, { useState } from 'react';
import './FirstPage.css'; // Assuming the CSS file is in the same directory as this component

const FirstPage = () => {
    const [position, setPosition] = useState(0);
    const texts = [
        'Welcome to MindScape, your AI-powered medical chatbot offering expert solutions for health advice.',
        'Experience the next generation of healthcare with MindScape, your personal medical AI bot. With MindScape, achieving optimal health has never been easier or more personalized.','Simply input your symptoms, and let MindScape track your progress while providing tailored dietary recommendations. ',
        'Access MindScape anytime, anywhere for immediate assistance and guidance, ensuring peace of mind around the clock.'
    ]; // Add your text here

    const moveLeft = () => {
        setPosition(prevPosition => (prevPosition === 0 ? texts.length - 1 : prevPosition - 1));
    };

    const moveRight = () => {
        setPosition(prevPosition => (prevPosition === texts.length - 1 ? 0 : prevPosition + 1));
    };

    return (
        <div className="welcom">
            <h1>Welcome to MindScape</h1>
            <div className="introduction">
                <div className="text-container">
                    <button className="arrow left-arrow" onClick={moveLeft}>&lt;</button>
                    <div className="text">{texts[position]}</div>
                    <button className="arrow right-arrow" onClick={moveRight}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
