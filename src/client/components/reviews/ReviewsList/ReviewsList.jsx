import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsItem from "../ReviewsItem";
import s from "./ReviewsList.module.css";
export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US&page=1`
    ).then((res) => {
      setReviews(res.data.results);
    });
  });
  const reviewsElem = reviews.map((item) => (
    <ReviewsItem key={item.id} {...item} />
  ));
  return (
    <>
      <ul className={s.ul}>{reviewsElem}</ul>;
    </>
  );
}
