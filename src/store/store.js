// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/redux"; // This path should be correct

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
