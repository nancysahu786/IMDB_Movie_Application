import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setTotalPages } from "../store/MoviesStore";

const MovieListPage = () => {
  const totalPages = useSelector((state) => state.movies.totalPages);
  const dispatch = useDispatch();

  const fetchMovies = async (pageNo) => {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.results) {
        dispatch(setMovies(data.results));
        dispatch(setTotalPages(data.total_pages));
      } else {
        throw new Error("Failed to fetch movies");
      }
    } catch (error) {
      throw new Error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <div className="movie-list-page">
      <h2>Movie List Page</h2>
      <MovieList />
      <div className="pagination-section">
        <Pagination onPageChange={fetchMovies} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default MovieListPage;
