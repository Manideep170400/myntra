import React, { useState } from "react";
import HomePage from "../Main/homePage";
import { Link } from "react-router-dom";

function ContentPage() {
  const { info } = useState(<HomePage />);
  return (
    <div>
      <p>Content Page</p>
      <Link to="/home" onClick={info}>
        home
      </Link>
    </div>
  );
}

export default ContentPage;
