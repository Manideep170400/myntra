// src/HOME/MainPAge.js (or Home.js)
import React from "react";
import HeaderPage from "../pageLayout/headerPage";
import FooterPage from "../pageLayout/footerPage";
import ContentPage from "../pageLayout/contentPage";
import { increment, decrement } from "../redux/redux"; // Correct path to counterSlice
import { useSelector, useDispatch } from "react-redux";
import Vivo from "../Mobile/vivo";

const Home = () => {
  const count = useSelector((state) => state.counter.counter); // Access counter from state
  const dispatch = useDispatch();

  return (
    <div>
      <Vivo name="manideep" />
      <HeaderPage />
      <ContentPage />
      <FooterPage />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Home;
