import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment } = testSlice.actions;

export default testSlice.reducer;
