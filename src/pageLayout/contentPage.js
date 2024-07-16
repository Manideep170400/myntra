import React, { useState } from "react";
import HomePage from "../Main/homePage";
import { Link } from "react-router-dom";
import HeroCycle from "../Cycle/altas";

function ContentPage() {
  const { info } = useState(<HomePage />);
  const { cycle } = useState(<HeroCycle />);
  return (
    <div>
      <p>Content Page</p>
      <Link to="/home" onClick={info}>
        Mobile
      </Link>
      <Link to="/cycle" onClick={cycle}>
        BiCycle
      </Link>
    </div>
  );
}

export default ContentPage;
