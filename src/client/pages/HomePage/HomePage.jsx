import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Films from "../../components/films";
import Loadorbtn from "../../components/Loadorbtn";
export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/trending/all/day?api_key=cd0424926ff3c009921c9fa2e813a15c&page=${page}`
    ).then((res) => {
      const data = res.data.results;
      setFilms(() => {
        return [...films, ...data];
      });
    });
  }, [page]);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <div className=" body">
        <Films movie={films} />
        <div className="btn">
          <Loadorbtn onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
