import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/book/:roomid" element={<BookingScreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/Login" element={<Loginscreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
