import React from "react";
import HeaderPage from "../pageLayout/headerPage";
import FooterPage from "../pageLayout/footerPage";
import ContentPage from "../pageLayout/contentPage";

const Home = () => {
  return (
    <div>
      <HeaderPage />
      <ContentPage />
      <FooterPage />
    </div>
  );
};

export default Home;
