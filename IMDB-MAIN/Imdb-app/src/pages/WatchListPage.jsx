import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchList } from "../store/WatchListStore";

const WatchListPage = () => {
  const watchList = useSelector((state) => state.watchList);
  console.log("watchlist-->", watchList);
  const dispatch = useDispatch();

  const generieds = {
    28: "Action",
    12: "Adventure",
    16: "Adventure",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Object.values(watchList));
  }, [watchList]);

  const handleMovieSearch = (e) => {
    console.log(e.target.value);
    const newList = Object.values(watchList)?.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setList(newList);
  };

  const handleSort = (type) => {
    const newList = Object.values(watchList)?.sort((a, b) =>
      type === "DESC"
        ? a.popularity - b.popularity
        : b.popularity - a.popularity
    );
    setList(newList);
  };

  const selectedGenere = () => {
    let genereList = [];
    Object.values(watchList).forEach((movie) => {
      genereList = genereList.concat(movie.genre_ids);
    });

    return [...new Set(genereList)];
  };

  const handleFilter = (genereId) => {
    const newList = Object.values(watchList).filter((movie) =>
      genereId ? movie.genre_ids.includes(genereId) : true
    );
    setList(newList);
  };

  const handleRemoveItem = (movieId) => {
    dispatch(removeFromWatchList(movieId));
  };

  return (
    <div>
      <h2>Watch list page</h2>
      <div className="container">
        <div className="left-section">
          <div className="genere-list">
            <div className="genere" onClick={() => handleFilter(null)}>
              All
            </div>
            {selectedGenere().map((genereId) => {
              return (
                <div className="genere" onClick={() => handleFilter(genereId)}>
                  {generieds[genereId]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-section">
          <input
            type="text"
            placeholder="Search Movie"
            onChange={handleMovieSearch}
          />
          <table border={1}>
            <tr style={{ background: "#646cff" }}>
              <td>S.NO</td>
              <td>Image</td>
              <td>Movie Title</td>
              <td>Genere</td>
              <td>
                Popularity<span onClick={() => handleSort("DESC")}>^</span>
                <span onClick={() => handleSort("ASC")}>v</span>
              </td>
              <td>Action</td>
            </tr>
            {watchList ? (
              list.map((movie, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="imageCover">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          height={100}
                          width={100}
                        />
                      </div>
                    </td>
                    <td>{movie.title}</td>
                    <td>
                      {movie.genre_ids
                        .map((genereId) => generieds[genereId])
                        .join(", ")}
                    </td>
                    <td>{movie.popularity}</td>
                    <td>
                      <button onClick={() => handleRemoveItem(movie.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h3>No movies in watchlist</h3>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchListPage;
