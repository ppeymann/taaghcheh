import { Container, Grid } from "@mui/material";
import React from "react";
import firstI from "../../Assets/NewBooks.png";
import secondI from "../../Assets/Infinity.png";
import theridI from "../../Assets/FreeBooks.png";
import "./heroinfo.scss";

const HeroInfo = () => {
  return (
    <div className="heroInfo">
      <Container maxWidth="md">
        <Grid container>
          <Grid className="flex-info" item xs={4}>
            <img src={firstI} alt="hero-info" />
            <p className="info-desc">خرید کتاب های جدید و پرفروش</p>
            <p className="info-desc-flex">جدیدترین کتاب ها</p>
          </Grid>
          <Grid className="flex-info" item xs={4}>
            <img src={theridI} alt="hero-info" />
            <p className="info-desc">امکان دریافت +20 هزار کتاب رایگان</p>
            <p className="info-desc-flex">کتاب های رایگان</p>
          </Grid>
          <Grid className="flex-info" item xs={4}>
            <img src={secondI} alt="hero-info" />
            <p className="info-desc">
              امکان خرید اشتراک ماهانه برای +28 هزار کتاب
            </p>
            <p className="info-desc-flex">کتابخانه اشتراکی</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroInfo;
