import React from "react";
import s from "./MoviePage.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar";
import Films from "../../components/films";
import Loadorbtn from "../../components/Loadorbtn";
export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US&page=1&include_adult=false&query=${
        (query, page)
      }`
    ).then((res) => {
      const data = res.data.results;
      setFilms(() => {
        return [...films, ...data];
      });
    });
  }, [query, page]);

  const handleSubmit = (data) => {
    setQuery(data);
  };
  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <div className=" body">
        <Films movie={films} />
        <div className={s.btn}>
          <Loadorbtn onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
