import React from "react";
import Header from "./client/components/Header";
import HomePage from "./client/pages/HomePage";
import MoviePage from "./client/pages/MoviePage";
import SingleMoviePage from "./client/pages/SingleMoviePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavoritesPage from "./client/pages/FavoritesPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movies/:id/*" element={<SingleMoviePage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}
