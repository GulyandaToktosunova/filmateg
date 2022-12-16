import React from "react";
import s from "./Searchbar.module.css";
import { useState } from "react";
export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery("");
  };
  return (
    <>
      {" "}
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormbutton}>
            <span className={s.SearchFormbuttonlabel}>search</span>
          </button>

          <input
            className={s.SearchForminput}
            type="text"
            value={query}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>
    </>
  );
}
