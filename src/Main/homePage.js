import React, { useState } from "react";
import Oppo from "../Mobile/oppo";
import { Link } from "react-router-dom";
import Vivo from "../Mobile/vivo";
import Iq from "../Mobile/iq";

function HomePage() {
  const [mobileOppo] = useState(<Oppo />);

  const object = {
    oppo: <Oppo />,
    vivo: <Vivo />,
    iq: <Iq />,
  };
  return (
    <div className="header">
      <div>
        <Link to="/home/oppo" onClick={mobileOppo}>
          oppo
        </Link>
        <Link to="/home/vivo">Vivo</Link>
        <Link to="/home/iq">IQ</Link>
      </div>
      <div>{object.oppo}</div>
      {object.vivo}
      {object.iq}
    </div>
  );
}

export default HomePage;
