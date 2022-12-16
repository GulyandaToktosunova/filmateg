import React from "react";
import { Link } from "react-router-dom";
import s from "./FilmItem.module.css";
export default function FIlmsItem({
  title,
  original_title,
  name,
  poster_path,
  id,
  backdrop_path,
  vote_average,
}) {
  return (
    <li className={s.item}>
      <Link to={`/movies/${id}`}>
        <img
          className={s.img}
          src={` https://image.tmdb.org/t/p/w500${
            poster_path || backdrop_path
          }`}
          alt=""
        />
        <div>
          <p className="title1">{title || original_title || name}</p>
          <p className="title1">{vote_average}</p>
        </div>
      </Link>
    </li>
  );
}
