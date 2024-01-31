import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/admin/loginSlice";
import productSlice from "./slice/admin/productSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    product: productSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
