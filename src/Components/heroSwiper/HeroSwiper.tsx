import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./heroSwiper.scss";
// import required modules
import { Navigation } from "swiper";

// Import image
import firstI from "../../Assets/swip1-1.jpg";
import secondI from "../../Assets/swip1-2.jpg";

const HeroSwiper = () => {
  return (
    <div className="hero-swiper">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          250: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="swiper-hero-image">
          <img src={firstI} alt="firstImage" />
        </SwiperSlide>
        <SwiperSlide className="swiper-hero-image">
          <img src={secondI} alt="secontI" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
