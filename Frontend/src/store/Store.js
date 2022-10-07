import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/UserSlice";
export default configureStore({
  reducer: {
    user: counterReducer,
  },
});