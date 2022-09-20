import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import eLogo1 from "../../Assets/footer/etemad.png";
import eLogo2 from "../../Assets/footer/etemad 2.png";
import logo from "../../Assets/footer/logo2.svg";

import "./footer style/middle.scss";

const MiddleFooter = () => {
  return (
    <div style={{ marginTop: "1rem", fontFamily: "yekan" }}>
      <Container maxWidth="lg" className="middel-container">
        <Grid
          className="middle-grid__container"
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={3} gap={3} className="middle-item__right">
            <img src={logo} />
            <p>
              طاقچه سایت و اپلیکیشن دانلود کتاب الکترونیکی و دانلود کتاب صوتی
              است. در طاقچه هزاران کتاب، مجله، روزنامه و کتاب گویا را می‌توانید
              دانلود کنید و با موبایل، تبلت و رایانه آن‌ها را بخوانید. در طاقچه
              کتاب‌های روانشناسی، رمان و داستان، کتاب‌های تاریخی، کتاب فلسفی و
              هزاران کتاب رایگان برای دانلود وجود دارد.
            </p>
            <div className="middle-logo">
              <img src={eLogo1} />
              <img src={eLogo2} />
            </div>
            <Divider className="middle-divider" />
          </Grid>
          <Grid item xs={12} md={8} mr={5}>
            <Grid className="middle-left" container mb={3} textAlign="right">
              <Grid
                item
                md={3}
                xs={6}
                display="flex"
                flexDirection="column"
                className="middle-link"
              >
                <h4>طاقچه</h4>
                <a href="#">تماس با ما</a>
                <a href="#">درباره طاقچه</a>
                <a href="#">وبلاگ طاقچه</a>
                <a href="#">سوالات متداول</a>
                <a href="#">فرصت های شغلی</a>
              </Grid>
              <Grid
                item
                md={3}
                xs={6}
                display="flex"
                flexDirection="column"
                className="middle-link"
              >
                <h4>کتاب های پیشنهادی</h4>
                <a href="#">رمان سالتو</a>
                <a href="#">شازده کوچولو</a>
                <a href="#">غرور و تعصب</a>
                <a href="#">مغازه خودکشی</a>
                <a href="#">کتاب اثر مرکب</a>
                <a href="#">کتاب بیشعوری</a>
                <a href="#">وقتی نیچه گریست</a>
                <a href="#">کتاب نیمه تاریک</a>
              </Grid>
              <Grid
                item
                md={3}
                xs={6}
                display="flex"
                flexDirection="column"
                className="middle-link"
              >
                <h4>دسته بندی پیشنهادی</h4>
                <a href="#">رمان عاشقانه</a>
                <a href="#">کتاب های علمی</a>
                <a href="#">کتاب های صوتی</a>
                <a href="#">کتاب های پزشکی</a>
                <a href="#">کتاب صوتی رایگان</a>
                <a href="#">کتاب های انگیزشی</a>
                <a href="#">کتاب داستان کودکانه</a>
                <a href="#">کتاب درسی و کمک درسی</a>
              </Grid>
              <Grid
                item
                md={3}
                xs={6}
                display="flex"
                flexDirection="column"
                className="middle-link"
              >
                <h4>وبلاگ طاقچه</h4>
                <a href="#">رمان جدید</a>
                <a href="#">فلورانس اسکاول شین</a>
                <a href="#">زندگی نامه و آثار سعدی</a>
                <a href="#">کتاب های اطلاعات عمومی</a>
                <a href="#">زندگی نامه و اشعار سهراب سپهری</a>
                <a href="#">زندگی‌نامه فردوسی و شاهنامه</a>
                <a href="#">زندگی‌نامه و اشعار حافظ شیرازی</a>
                <a href="#">معرفی کتاب‌های مشابه ملت عشق</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </div>
  );
};

export default MiddleFooter;
