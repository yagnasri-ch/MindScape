import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './loginComponents/LoginComponent';
import RegisterComponent from './loginComponents/RegisterComponent';
import FirstPage from './loginComponents/FirstPage';
import Home from './loginComponents/Home';
import BotPage from './loginComponents/BotPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<FirstPage />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/register" element={<RegisterComponent />} />
                    </Route>
                    <Route  path="/bot" element={<BotPage />} >
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;