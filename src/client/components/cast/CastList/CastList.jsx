import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CastItem from "../CastItem";
import s from "./CastList.module.css";

export default function CastList() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`
    ).then((res) => {
      setCast(res.data.cast);
    });
  });
  const castElem = cast.map((item) => <CastItem key={item.id} {...item} />);
  return <ul className={s.castElem}>{castElem}</ul>;
}
