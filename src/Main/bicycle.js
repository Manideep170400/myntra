import React, { useState } from "react";
import { Link } from "react-router-dom";
import Altas from "../Cycle/altas";
import Gear from "../Cycle/gear";
import "./HomePage.css";

const HeroCycle = () => {
  const [cycle, setCycle] = useState(<Altas />);

  const handleCycle = (component) => {
    setCycle(component);
  };

  const object = {
    altas: <Altas />,
    gear: <Gear />,
  };

  return (
    <div className="homepage">
      <div className="sidebar">
        <Link
          to="/cycle/altas"
          onClick={(e) => {
            e.preventDefault();
            handleCycle(object.altas);
          }}
        >
          Altas
        </Link>
        <Link
          to="/cycle/gear"
          onClick={(e) => {
            e.preventDefault();
            handleCycle(object.gear);
          }}
        >
          Gear-cycle
        </Link>
      </div>
      <div>{cycle}</div>
    </div>
  );
};

export default HeroCycle;
