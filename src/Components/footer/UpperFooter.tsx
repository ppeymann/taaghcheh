import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import web from "../../Assets/footer/web.png";
import google from "../../Assets/footer/googlePlay.svg";
import appStore from "../../Assets/footer/appstore.svg";
import windows from "../../Assets/footer/windows.svg";
import "./footer style/upper.scss";
const UpperFooter = () => {
  return (
    <div className="upper-footer">
      <Container maxWidth="lg" className="upper-container">
        <Grid
          className="upper-grid__container"
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={4}>
            <img style={{ width: "150px" }} src={web} alt="web" />
          </Grid>
          <Grid item xs={12} md={8}>
            <h4 className="upper-title">نزدیک ترین کتابفروشی شهر</h4>
            <Grid container mb={3}>
              <Grid item md={3} xs={6}>
                <img src={google} alt="google" />
              </Grid>
              <Grid item md={3} xs={6}>
                <img src={appStore} alt="appStore" />
              </Grid>
              <Grid item md={3} xs={6}>
                <img src={windows} alt="windows" />
              </Grid>
              <Grid item md={3} xs={6}>
                <div className="upper-btn">
                  <span>...</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </div>
  );
};

export default UpperFooter;
