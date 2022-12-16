import React from "react";
import style from "./Loardbtn.module.css";
export default function Loardbtn({ onClick }) {
  return (
    <div className="v">
      <button onClick={onClick} className={style.btn}>
        button
      </button>
    </div>
  );
}
