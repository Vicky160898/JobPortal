import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/userReducer";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
