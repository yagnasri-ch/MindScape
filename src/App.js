import React, { useState } from 'react';
import logo from './logo.png';
import LoginComponent from './loginComponents/LoginComponent';
import RegisterComponent from './loginComponents/RegisterComponent';
import FirstPage from './loginComponents/FirstPage';

function App() {
    // Define state variables
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    // Function to toggle login form visibility
    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false); // Hide registration form when showing login form
    };

    // Function to toggle registration form visibility
    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false); // Hide login form when showing registration form
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar-head">
                    Mind Scape
                </div>
                <ul className="navbar-links">
                    <li><a href="#" onClick={toggleLoginForm}>Login</a></li>
                    <li><a href="#" onClick={toggleRegisterForm}>Register</a></li>
                </ul>
            </nav>

            {/* Conditional rendering of login form */}
            {showLoginForm && <LoginComponent />}

            {/* Conditional rendering of registration form */}
            {showRegisterForm && <RegisterComponent />}
            <FirstPage/>

        </div>
    );
}

export default App;
