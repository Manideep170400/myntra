import React, { useState } from "react";
import Oppo from "../Mobile/oppo";
import { Link } from "react-router-dom";
import Vivo from "../Mobile/vivo";
import Iq from "../Mobile/iq";
import "./HomePage.css";

function HomePage() {
  const [mobile, setMobile] = useState(<Oppo />);

  const handleMobile = (component) => {
    setMobile(component);
  };

  const object = {
    oppo: <Oppo />,
    vivo: <Vivo />,
    iq: <Iq />,
  };

  return (
    <div className="homepage">
      <div className="sidebar">
        <div className="header">Navigation</div>
        <ul>
          <li>
            <Link
              to="/home/oppo"
              onClick={(e) => {
                e.preventDefault();
                handleMobile(object.oppo);
              }}
            >
              Oppo
            </Link>
          </li>
          <li>
            <Link
              to="/home/vivo"
              onClick={(e) => {
                e.preventDefault();
                handleMobile(object.vivo);
              }}
            >
              Vivo
            </Link>
          </li>
          <li>
            <Link
              to="/home/iq"
              onClick={(e) => {
                e.preventDefault();
                handleMobile(object.iq);
              }}
            >
              IQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">{mobile}</div>
    </div>
  );
}

export default HomePage;
