import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HOME/MainPAge";
import HomePage from "./Main/homePage";
import Oppo from "./Mobile/oppo";
import Vivo from "./Mobile/vivo";
import IQ from "./Mobile/iq";
import Altas from "./Cycle/altas"; // Correct import path and casing
import Gear from "./Cycle/gear"; // Correct import path and casing
import HeroCycle from "./Main/bicycle";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cycle" element={<HeroCycle />} />
          <Route path="/home/oppo" element={<Oppo />} />
          <Route path="/home/vivo" element={<Vivo />} />
          <Route path="/home/iq" element={<IQ />} />
          <Route path="/cycle/altas" element={<Altas />} />
          <Route path="/cycle/gear" element={<Gear />} />
        </Routes>
      </Router>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default App;
