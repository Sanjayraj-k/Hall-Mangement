import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    
      <div className="App">
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomeScreen />} />
        </Routes>
        
        </BrowserRouter></div>
    
  );
}

export default App;