import React from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import swiper from "../../server/swiper2";
import { Container, Grid, Rating } from "@mui/material";
import { swiper2 } from "../../Types/types";
import { FiBookmark, FiShare2, FiGift } from "react-icons/fi";

const Detail = () => {
  const { id } = useParams();
  const books: Array<swiper2> = swiper.filter((item) => item.id === Number(id));
  const book: swiper2 = books[0];
  return (
    <div className="detail">
      <div className="detail-route">
        <Container maxWidth="lg">
          <p>
            {"  "}
            طاقچه/{"  "} {book.info?.finalInfo.grouping}/ {book.title}
            {"  "}
          </p>
        </Container>
      </div>
      <Container maxWidth="lg" className="detail-info__large">
        <Grid mt={5} className="grid-container" container>
          <Grid className="image-rate" item xs={3}>
            <img src={book.src} alt="bookImage" />
            <Rating readOnly value={book.info?.rate} precision={1} />
            <p className="rating-text">{book.info?.rate} از 8 نظر</p>
          </Grid>
          <Grid
            mt={0.5}
            className="detail-right"
            container
            justifyContent="center"
            alignItems="center"
            item
            spacing={3}
            xs={6}
            md={8}
          >
            <Grid
              pr={1}
              display="flex"
              flexDirection="column"
              className="detail-right__info"
              item
              xs={12}
              md={4}
            >
              <h6 className="detail-title">دانلود و خرید {book.title}</h6>
              <div className="detail-book__topInfo">
                <p>{`نویسنده: ${book.author} >`}</p>
                <p>{`مترجم: ${book.info?.translator} >`}</p>
                <p>{` ${book.info?.publication} `}</p>
              </div>
              <div className="detail-favorit__icon">
                <FiBookmark className="detail-icon" />
                <FiShare2 className="detail-icon" />
                <FiGift className="detail-icon" />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="detail-btns">
                <button className="detail-btn price-btn">
                  خرید | {book.info?.price} تومان
                </button>
                <button className="detail-btn">مطالعه نمونه</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Detail;
