import React from 'react';
import styles from '../loginComponents/LoginComponent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState } from "react";

async function save(email1, password1)
{
    try
    {
        await axios.get("http://localhost:8080/display/greetings",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }

            });
        alert("login Successfully");
    }
    catch(err)
    {
    }
}

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <div className="login">
        <form action="" className="login__form">
            <h1 className="login__title">Login</h1>
            <div className="login__content">
                <div className="login__box">
                    <i className="ri-user-3-line login__icon"></i>
                    <div className="login__box-input">
                        <input type="email" required className="login__input" id="login-email" placeholder=""
                               value={email}
                               onChange={(event) => {
                                   setEmail(event.target.value);
                               }}
                        />
                        <label htmlFor="login-email" className="login__label">Email</label>
                    </div>
                </div>
                <div className="login__box">
                    <i className="ri-lock-2-line login__icon"></i>
                    <div className="login__box-input">
                        <input type="password" required className="login__input" id="login-pass"
                               placeholder=" "
                               value={password}
                               onChange={(event) => {
                                   setPassword(event.target.value);
                               }}/>
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
            <button className="login__button" onClick={
                ()=>{
                    save(email, password).then(r => {}) }}
            >Login</button>
        </form>
    </div>;
}

export default LoginComponent;

