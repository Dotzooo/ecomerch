import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    // 定義 reducer 函數
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
