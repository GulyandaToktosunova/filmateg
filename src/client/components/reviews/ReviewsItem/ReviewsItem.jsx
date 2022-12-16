import React from "react";
import s from "./ReviwesItem.module.css";
export default function ReviewsItem({ author, content }) {
  return (
    <li>
      <p className={s.item}>{author}</p>
      <p className={s.item}>{content}</p>
    </li>
  );
}
