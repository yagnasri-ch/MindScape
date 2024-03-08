import React from 'react';
import '../loginComponents/Home.css'; // Correct the path for CSS file
import logo from '../MS.png';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar-head multicolor-text">
                    MindScape
                </div>
                <ul className="navbar-links">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    <li> <Link to="/register">Register</Link> </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;
