import React from "react";
import FilmsItem from "../FilmsItem/FilmsItem";
import s from "./FilmList.module.css";
export default function FilmsList({ movie }) {
  const filmsElem = movie.map((item) => <FilmsItem key={item.id} {...item} />);
  return <ul className={s.films}>{filmsElem}</ul>;
}
