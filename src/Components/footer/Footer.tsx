import React from "react";
import { Container } from "@mui/material";
import DownFooter from "./DownFooter";
import MiddleFooter from "./MiddleFooter";
import UpperFooter from "./UpperFooter";

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: "5.5rem" }}>
        <UpperFooter />
        <MiddleFooter />
        <DownFooter />
      </div>
      <div className="downest-test">&#169;Testing v0.0.1</div>
    </>
  );
};

export default Footer;
