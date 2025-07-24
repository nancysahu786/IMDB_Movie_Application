import { useSelector } from "react-redux";
import Movie from "./Movie";
const MovieList = () => {
  // console.log("movies", movies);
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => {
        return (
          <span key={index}>
            <Movie movie={movie} />
          </span>
        );
      })}
    </div>
  );
};

export default MovieList;
