import React from "react";
import HeroPage from "./Components/heroSection/HeroPage";
import HeroSwiper from "./Components/heroSwiper/HeroSwiper";
import HeroInfo from "./Components/herpInformation/HeroInfo";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <HeroInfo />
      <HeroSwiper />
    </div>
  );
}

export default App;
