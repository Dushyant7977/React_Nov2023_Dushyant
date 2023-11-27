import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Webpage from './components/webpage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register.js';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Webpage />} />
          <Route path="/h" element={<Login />} />
          <Route path="/r" element={<Register />} /> 
        </Routes>
  </Router> 
      
    </div>
  );
}

export default App;
