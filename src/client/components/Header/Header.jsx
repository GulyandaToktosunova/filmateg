import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
export default function Header() {
  return (
    <div className={style.wrapper}>
      <NavLink className={style.title} to={"/"}>
        HomePage
      </NavLink>
      <NavLink className={style.title} to={"/movie"}>
        MoviePage
      </NavLink>
      <NavLink className={style.title} to={"/FavoritesPage"}>
        {" "}
        Favorites
      </NavLink>
    </div>
  );
}
