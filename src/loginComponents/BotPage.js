import React from 'react';
import '../loginComponents/BotPage.css';
import logo from '../MS.png';
import {Link, Outlet} from "react-router-dom";


const BotPage = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar-head">
                    MindScape
                </div>
            </nav>
                <div className="bot_Main">
                    <h1> Hello!Welcome to Mind Scape </h1>
                    <p>Bot is ready for chat</p>
                </div>


        </div>

    )
        ;
}
export default BotPage;