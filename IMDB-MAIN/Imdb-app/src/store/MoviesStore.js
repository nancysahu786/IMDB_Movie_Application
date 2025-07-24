import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  totalPages: 0,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    setMovies: (state, action) => {
      console.log("set movies--> ", action);
      state.movies = action.payload;
    },
    setTotalPages: (state, action) => {
      console.log("set total pages-->", action);
      state.totalPages = action.payload;
    },
  },
});

export const { setMovies, setTotalPages } = moviesSlice.actions;

export default moviesSlice.reducer;
