import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

// icon import
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import LoginIcon from "@mui/icons-material/Login";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SpaIcon from "@mui/icons-material/Spa";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ListIcon from "@mui/icons-material/List";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

// sass import
import "./navbar.scss";

// component
const Navbar = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  const clossing = (): void => {
    setIsOpen(false);
  };
  const oppening = (): void => {
    setIsOpen(true);
  };

  window.addEventListener("scroll", () => {
    const navScroll = document.querySelector(".navbar");
    if (+window.scrollY > 0) {
      navScroll?.classList.add("scroll");
    } else if (+window.scrollY == 0) {
      navScroll?.classList.remove("scroll");
    }
  });

  return (
    <div
      id="navScroll"
      className={+window.scrollY > 0 ? "navbar scroll" : "navbar"}
    >
      <Container maxWidth="lg" className="nav-container">
        <Grid
          container
          flexWrap="nowrap"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid sx={{ width: "65%" }} item sm={9}>
            <div className="search-menu">
              <div className="menu">
                <div className="hamburger-search">
                  <MenuIcon sx={{ cursor: "pointer" }} onClick={oppening} />
                  <SearchIcon className="search-icon" />
                </div>
                <Link to="/">
                  <h1 className="Logo">??????????</h1>
                </Link>
                <ul className="nav-menu">
                  <li>???????? ????????</li>
                  <li>???? ??????????</li>
                  <li>????????</li>
                </ul>
              </div>
              <div className="search">
                <div className="search-div">
                  <button className="search-btn">
                    <SearchIcon fontSize="small" />
                  </button>
                  <input
                    id="search-input"
                    type="search"
                    placeholder="?????? ?? ????"
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={3}>
            <div className="nav-button">
              <button className="install">?????? ??????????</button>
              <button className="login">????????</button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={open ? "drawer active" : "drawer"}>
        <div className="drawer-logo">
          <NavigateNextIcon className="close-meu" onClick={clossing} />
          <h2>??????????</h2>
        </div>
        <ul className="drawer-menu">
          <li className="first-list-menu">
            <BrowserUpdatedIcon />
            <span>?????? ??????????</span>
          </li>
          <li>
            <LoginIcon />
            <span>???????? ???? ??????????</span>
          </li>
          <li>
            <SpaIcon />
            <span>????????</span>
          </li>
          <li>
            <AutoStoriesIcon />
            <span>???????? ?????? ????</span>
          </li>
          <li>
            <LocalGroceryStoreIcon />
            <span>??????????????</span>
          </li>
          <li>
            <ListIcon />
            <span>???????? ????????</span>
          </li>
          <li>
            <HeadphonesIcon />
            <span>???????? ?????? ????????</span>
          </li>
          <li className="last-list-menu">
            <AllInclusiveIcon />
            <span>?????????? ???? ??????????</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
