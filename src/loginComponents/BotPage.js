import React, { useEffect } from 'react';
import '../loginComponents/BotPage.css';
import logo from '../MS.png';
import {Link, Outlet} from "react-router-dom";
import axios from 'axios';

const BotPage = () => {
    const fetchData = async () => {
        try{
            const response = await axios.get("http://localhost:8080/users");
            console.log(response);
        }
        catch(error)
        {
            console.log(error.response);
        }
    };
    useEffect(() => { fetchData(); }, []);

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

    );
}
export default BotPage;