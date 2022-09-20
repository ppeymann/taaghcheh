import React from "react";
import Container from "@mui/material/Container";
import "./bookdetail.scss";
import { useParams } from "react-router-dom";
import swiper from "../../server/swiper2";
import { swiper2 } from "../../Types/types";

const BookDetail = () => {
  const { id } = useParams();
  const books: Array<swiper2> = swiper.filter((item) => item.id === Number(id));
  const book: swiper2 = books[0];
  return (
    <div className="book-detail">
      <Container maxWidth="lg">
        <h6 className="book-detail__title">اطلاعات تکمیلی</h6>
        <div className="book-detail__route">
          <p>{`دسته بندی > ${book.info?.finalInfo.grouping}`}</p>
        </div>
        <div className="book-detail__infos">
          <div className="book-detail__info">
            <p className="book-detail__titleInfo">تعداد صفحات</p>
            <p className="book-detail__valueInfo">
              {book.info?.finalInfo.page}
              <span style={{ color: "#999", marginRight: "5px" }}>صفحه</span>
            </p>
          </div>
          <div className="book-detail__info">
            <p className="book-detail__titleInfo">قیمت نسخه چاپی</p>
            <p className="book-detail__valueInfo">
              {book.info?.finalInfo.finalPrice}
              <span style={{ color: "#999", marginRight: "5px" }}>تومان</span>
            </p>
          </div>
          <div className="book-detail__info">
            <p className="book-detail__titleInfo">نوع فایل</p>
            <p className="book-detail__valueInfo">
              {book.info?.finalInfo.typeofFile}
            </p>
          </div>
          <div className="book-detail__info">
            <p className="book-detail__titleInfo">شابک</p>
            <p className="book-detail__valueInfo">
              {book.info?.finalInfo.shabak}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetail;
