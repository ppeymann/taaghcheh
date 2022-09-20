import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../heroSwiper/heroSwiper.scss";
// import required modules
import { Navigation } from "swiper";

// Import image
import one from "../../Assets/downSwiper/1.jpg";
import two from "../../Assets/downSwiper/2.jpg";
import three from "../../Assets/downSwiper/3.jpg";
import four from "../../Assets/downSwiper/4.jpg";

const DownSwiper = () => {
  return (
    <div className="hero-swiper">
      <div className="title-hero__swiper">
        <h4>کتاب صوتی با صدای بازیگران</h4>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        className="mySwiper"
        slidesPerView={2}
        breakpoints={{
          1224: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          555: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          440: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          370: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },

          250: {
            spaceBetween: 10,
            slidesPerView: 1.2,
          },
        }}
      >
        <SwiperSlide className="swiper-hero-image downSwiper">
          <img src={one} alt="firstImage" />
        </SwiperSlide>
        <SwiperSlide className="swiper-hero-image downSwiper">
          <img src={two} alt="secontI" />
        </SwiperSlide>
        <SwiperSlide className="swiper-hero-image downSwiper">
          <img src={three} alt="secontI" />
        </SwiperSlide>
        <SwiperSlide className="swiper-hero-image downSwiper">
          <img src={four} alt="secontI" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DownSwiper;
