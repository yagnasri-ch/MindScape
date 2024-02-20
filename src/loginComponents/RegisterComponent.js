import React from 'react';
import '../loginComponents/RegisterComponent.css';
import {Link} from "react-router-dom";

const RegisterComponent = () => {
    return (
        <div className="register">
            <form action="" className="register__form">
                <h1 className="register__title">Register</h1>
                <div className="register__content">
                    <div className="register__box">
                        <i className="ri-user-3-line register__icon"></i>
                        <div className="register__box-input">
                            <input type="email" required className="register__input" id="register-email"
                                   placeholder=" "/>
                            <label htmlFor="register-email" className="register__label">Name</label>
                        </div>
                    </div>
                    <div className="register__box">
                        <i className="ri-user-3-line register__icon"></i>
                        <div className="register__box-input">
                            <input type="email" required className="register__input" id="register-email"
                                   placeholder=" "/>
                            <label htmlFor="register-email" className="register__label">Email</label>
                        </div>
                    </div>
                    <div className="register__box">
                        <i className="ri-lock-2-line register__icon"></i>
                        <div className="register__box-input">
                            <input type="password" required className="register__input" id="register-pass"
                                   placeholder=" "/>
                            <label htmlFor="register-pass" className="register__label">Password</label>
                            <i className="ri-eye-off-line register__eye" id="register-eye"></i>
                        </div>
                    </div>
                </div>

                <div className="register__check">
                    <div className="register__check-group">
                        <input type="checkbox" className="register__check-input" id="register-check"/>
                        <label htmlFor="register-check" className="register__check-label">I agree to the terms and
                            conditions</label>
                    </div>
                </div>
                <Link to="/bot" className="register__button">Register</Link>

            </form>
        </div>
    );
}

export default RegisterComponent;
