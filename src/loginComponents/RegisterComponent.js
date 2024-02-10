import React from 'react';
import backgroundimg from '..//backgroundimg.jpg'; // Check the correct path
import '../css/login.css'; // Check the correct path for CSS file

function RegisterComponent() {
    return (
        <div className="App">
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
                </form>
            </div>
        </div>
    );
}

export default RegisterComponent;
