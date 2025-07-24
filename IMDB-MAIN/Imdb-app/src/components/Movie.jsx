import { useDispatch, useSelector } from "react-redux";
import { addInWatchList, removeFromWatchList } from "../store/WatchListStore";

const Movie = ({ movie }) => {
  const watchList = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const handleWatchlist = () => {
    if (watchList[movie.id]) {
      // delete watchList[movie.id];
      dispatch(removeFromWatchList(movie.id));
    } else {
      dispatch(addInWatchList({ movie }));
    }
  };

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <button onClick={handleWatchlist}>
          <span className="buttonText">{watchList[movie.id] ? "-" : "+"}</span>{" "}
          Watchlist
        </button>
      </div>
    </div>
  );
};

export default Movie;
