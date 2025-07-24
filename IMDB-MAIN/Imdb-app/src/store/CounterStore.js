import { createSlice } from "@reduxjs/toolkit";

// Removed TypeScript interface as this is a JavaScript file

const initialState = {
  value: 0,
};

// i am going to create one section in store that is for counter which will help to maintain the state of a counter
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducers contains the method that we wanted to expose to components that can be triggered from there and we are able to update the states
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
