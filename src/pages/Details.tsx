import React from "react";
import BookDetail from "../Components/bookDetail/BookDetail";
import Detail from "../Components/detail/Detail";
import Newest from "../Components/newsetSwiper/Newest";

const Details = () => {
  return (
    <>
      <Detail />
      <Newest />
      <BookDetail />
    </>
  );
};

export default Details;
