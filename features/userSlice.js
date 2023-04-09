// features/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    loginWithGoogle: () => {},
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, loginWithGoogle, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
