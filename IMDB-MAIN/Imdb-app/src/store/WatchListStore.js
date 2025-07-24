import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,

  reducers: {
    addInWatchList: (state, action) => {
      state[action.payload.movie.id] = action.payload.movie;
    },
    removeFromWatchList: (state, action) => {
      console.log("action-->", action);

      // here in redux we can directly change the state or mutate
      delete state[action.payload];
    },
  },
});

console.log("initial state", initialState);

export const { addInWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
