import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterStore";
import watchListReducer from "./WatchListStore";
import moviesReducer from "./MoviesStore";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    watchList: watchListReducer,
    movies: moviesReducer,
  },
});
