import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from "../../components/cast";
import Reviews from "../../components/reviews";
import s from "./SingleMoviePage.module.css";
import Btn from "../../components/Btn";
import { Routes, Route, NavLink } from "react-router-dom";
import FavoritesPage from "../FavoritesPage";
export default function SingleMoviePage() {
  const [film, setFilm] = useState({});
  const [favorite, setFavorite] = [];
  const { id } = useParams();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`
    ).then((res) => {
      setFilm(res.data);
    });
  });

  const handleMovieAdd = () => {
    setFavorite((prevState) => {});
  };
  return (
    <>
      <div className={s.body}>
        <div className={s.container}>
          {film && (
            <>
              <img
                className="img"
                src={` https://image.tmdb.org/t/p/w500${
                  film.poster_path || film.backdrop_path
                }`}
                alt=""
              />
              <div className="title">
                <h2 className={s.t}>
                  movie title:
                  {film.title}
                </h2>
                <h2 className={s.h2}> date: {film.release_date}</h2>
                <p className={s.t}>overview: {film.overview}</p>
                <p> popularity: {film.popularity}</p>
                <p>status: {film.status}</p>
                <p>tagline: {film.tagline}</p>
                <p>
                  Rating: {film.vote_average && film.vote_average.toFixed(1)}
                </p>
                <p>vote_count: {film.vote_count}</p>
                <div>
                  {<Cast /> && (
                    <>
                      <NavLink to="cast" className={s.Navlink}>
                        cast
                      </NavLink>
                    </>
                  )}
                  {<Reviews /> && (
                    <>
                      <NavLink to="reviews" className={s.Navlink}>
                        reviews
                      </NavLink>
                      <Btn onClick={handleMovieAdd} />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="Favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
