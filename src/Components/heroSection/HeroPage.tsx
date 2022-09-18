import React from "react";
import "./hero.scss";
import { Container, Grid } from "@mui/material";
import PhonePic from "../../Assets/phones-360w.png";

const HeroPage = () => {
  return (
    <div className="hero-section">
      <Container maxWidth="md">
        <Grid className="hero-container" container spacing={1}>
          <Grid className="hero-info" item md={8} xs={6}>
            <h4 className="hero-description">لذت خواندن و شنیدن کتاب ها</h4>
            <p>دانلود قانونی بیش از 100,000 کتاب متنی و صوتی</p>
            <button className="install-hero">نصب اپلیکیشن طاقچه</button>
          </Grid>
          <Grid item md={4} xs={5}>
            <img src={PhonePic} alt="phone" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroPage;
