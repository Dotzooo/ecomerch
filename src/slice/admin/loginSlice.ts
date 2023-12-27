import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: !!localStorage.getItem("authToken"),
  },
  reducers: {
    // 登入/登出
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedOut: (state) => {
      localStorage.removeItem("authToken");

      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
