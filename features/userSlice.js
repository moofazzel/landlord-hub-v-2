// features/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.loading = action.payload;
      state.user = action.payload;
    },
    loginWithGoogle: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    logout: (state, action) => {
      state.loading = action.payload;
      state.user = null;
    },
  },
});

export const { login, loginWithGoogle, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
