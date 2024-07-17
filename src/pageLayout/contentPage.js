import React, { useState } from "react";
import HomePage from "../Main/homePage";
import { Link } from "react-router-dom";
import HeroCycle from "../Cycle/altas";

function ContentPage() {
  const { info } = useState(<HomePage />);
  const { cycle } = useState(<HeroCycle />);
  const [show, setShow] = useState(false);

  return (
    <div className="main__wrapper App">
      <div>
        <p>Content Page</p>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <span
          class="material-symbols-outlined"
          onClick={() => {
            setShow(!show);
          }}
        >
          arrow_drop_down
          {show && (
            <div>
              <Link to="/home" onClick={info}>
                Mobile
              </Link>
              <Link to="/cycle" onClick={cycle}>
                BiCycle
              </Link>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default ContentPage;
