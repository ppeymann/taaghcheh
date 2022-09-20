import React from "react";
import "./footer style/down.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Container } from "@mui/material";
const DownFooter = () => {
  return (
    <>
      <div className="down-footer">
        <Container maxWidth="lg">
          <div className="down-footer-upper">
            <div className="icon-texts">
              <p className="copy-text">
                &#169; این سایت توسط پیمان ملک برای تمرین توسعه داده شده است
              </p>
              <div className="footer-icons">
                <HiLocationMarker className="icon" />
                <BsInstagram className="icon" />
                <SiAparat className="icon" />
                <AiOutlineTwitter className="icon" />
                <FaLinkedinIn className="icon" />
                <AiFillYoutube className="icon" />
                <FaTelegramPlane className="icon" />
              </div>
            </div>
            <div className="footer-menu">
              <div>
                <a href="#">ورود ناشران</a>
              </div>
              <div>
                <a href="#">شرایط استفاده</a>
              </div>
              <div>
                <a href="#">سوالات متداول</a>
              </div>
              <div>
                <a href="#" className="last-link">
                  ارتباط با پشتیبانی
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DownFooter;
