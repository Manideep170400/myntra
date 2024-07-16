import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HOME/MainPAge";
import HomePage from "./Main/homePage";
import Oppo from "./Mobile/oppo";
import Vivo from "./Mobile/vivo";
import IQ from "./Mobile/iq";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/oppo" element={<Oppo />} />
          <Route path="/home/vivo" element={<Vivo />} />
          <Route path="/home/iq" element={<IQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
