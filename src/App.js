import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './loginComponents/LoginComponent';
import RegisterComponent from './loginComponents/RegisterComponent';
import FirstPage from './loginComponents/FirstPage';
import Home from './loginComponents/Home';

function App() {
    
    return (
      <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home />}>
                <Route index element={ <FirstPage />} />
                <Route path='/login' element={ <LoginComponent />} />
                <Route path='/register' element={ < RegisterComponent />} />
            </Route>
          </Routes>
          </BrowserRouter> 
      </div>
    );
}

export default App;
