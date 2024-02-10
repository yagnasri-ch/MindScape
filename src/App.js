import backgroundimg from './backgroundimg.jpg';
import styles from './css/login.css';
import logo from './logo.png';
import React, { useState } from 'react';

function App() {
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
      {showLoginForm && (
        <div className="login">
          <img src={backgroundimg} alt="login image" className="login__img"/>
          <form action="" className="login__form">
            <h1 className="login__title">Login</h1>
            <div className="login__content">
              <div className="login__box">
                <i className="ri-user-3-line login__icon"></i>
                <div className="login__box-input">
                  <input type="email" required className="login__input" id="login-email" placeholder=" "/>
                  <label htmlFor="login-email" className="login__label">Email</label>
                </div>
              </div>
              <div className="login__box">
                <i className="ri-lock-2-line login__icon"></i>
                <div className="login__box-input">
                  <input type="password" required className="login__input" id="login-pass" placeholder=" "/>
                  <label htmlFor="login-pass" className="login__label">Password</label>
                  <i className="ri-eye-off-line login__eye" id="login-eye"></i>
                </div>
              </div>
            </div>
            <div className="login__check">
              <div className="login__check-group">
                <input type="checkbox" className="login__check-input" id="login-check"/>
                <label htmlFor="login-check" className="login__check-label">Remember me</label>
              </div>
              <a href="#" className="login__forgot">Forgot Password?</a>
            </div>
            <button type="submit" className="login__button">Login</button>
            <p className="login__register">
              Don't have an account? <a href="#" onClick={toggleRegisterForm}>Register</a>
            </p>
          </form>
        </div>
      )}

      {/* Conditional rendering of registration form */}
      {showRegisterForm && (
        <div className="login">
          <img src={backgroundimg} alt="login image" className="login__img"/>
          <form action="" className="login__form">
            <h1 className="login__title">Register</h1>
            <div className="login__content">
              <div className="login__box">
                <i className="ri-user-3-line login__icon"></i>
                
                <div className="login__box-input">
                  <input type="email" required className="login__input" id="register-email" placeholder=" "/>
                  <label htmlFor="register-email" className="login__label">Email</label>
                </div>
              </div>
              <div className="login__box">
                <i className="ri-lock-2-line login__icon"></i>
                <div className="login__box-input">
                  <input type="password" required className="login__input" id="register-pass" placeholder=" "/>
                  <label htmlFor="register-pass" className="login__label">Password</label>
                  <i className="ri-eye-off-line login__eye" id="register-eye"></i>
                </div>
              </div>
            </div>
            <div className="login__check">
              <div className="login__check-group">
                <input type="checkbox" className="login__check-input" id="register-check"/>
                <label htmlFor="register-check" className="login__check-label">I agree to the terms and conditions</label>
              </div>
            </div>
            <button type="submit" className="login__button">Register</button>
            <p className="login__register">
              Already have an account? <a href="#" onClick={toggleLoginForm}>Login</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

