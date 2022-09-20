import React from "react";
import HeroPage from "../Components/heroSection/HeroPage";
import HeroSwiper from "../Components/heroSwiper/HeroSwiper";
import HeroInfo from "../Components/herpInformation/HeroInfo";
import MoreInfo from "../Components/moreInfo/MoreInfo";
import Newest from "../Components/newsetSwiper/Newest";
import DownSwiper from "../Components/secondHeroSwiper/DownSwiper";
import TrendSwiper from "../Components/swiper2/TrendSwiper";
const Home = () => {
  return (
    <>
      <HeroPage />
      <HeroInfo />
      <HeroSwiper />
      <TrendSwiper />
      <Newest />
      <DownSwiper />
      <MoreInfo />
    </>
  );
};

export default Home;
