import React from "react";
import { Container } from "@mui/material";
import swiperArray from "../../server/swiper2";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../swiper2/trend.scss";

// import required modules
import { FreeMode } from "swiper";

const Newest = () => {
  return (
    <div className="trending">
      <Container className="trending-container" maxWidth="lg">
        <div className="trend-title">
          <div className="trend-title__title">
            <h6 className="trending">کتاب های پرفروش صوتی</h6>
            <h6 className="subtitle">کتاب هایی که به تازگی پرفروش شده اند</h6>
          </div>
          <div className="seeing-trending">
            <a href="#">مشاهده همه</a>
          </div>
        </div>
        <div className="trend-swiper">
          <Swiper
            slidesPerView={6.5}
            freeMode={true}
            modules={[FreeMode]}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              1100: {
                slidesPerView: 6.5,
              },
              880: {
                slidesPerView: 5.5,
              },

              500: {
                slidesPerView: 3.5,
              },
              300: {
                slidesPerView: 2.5,
              },
            }}
          >
            {swiperArray.map((item) => (
              <SwiperSlide className="swiper-container" key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <img src={item.src} alt={item.title} />
                  <p className="name-book">{item.title}</p>
                  <p className="name-author">{item.author}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Newest;
