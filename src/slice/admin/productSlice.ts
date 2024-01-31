import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    getProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;
