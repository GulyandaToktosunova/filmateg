import React from "react";
import s from "./CastItem.module.css";
export default function CastItem({ name, profile_path }) {
  return (
    <li>
      <img
        className={s.img}
        src={
          profile_path
            ? ` https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://i.pinimg.com/236x/5a/8d/6a/5a8d6a180405cead05eb19c49bb9979c.jpg`
        }
        alt=""
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}
