import React from "react";
import "./App.scss";
import MainPage from "./Components/MainPage/MainPage";
import SecoundPage from "./Components/AboutMe/AboutMe";
import Certificate from "./Components/Certificate/Certificate";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="mainPage">
      <MainPage />
      <SecoundPage />
      <Portfolio />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
