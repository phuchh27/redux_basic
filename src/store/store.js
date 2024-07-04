import { createSlice, configureStore } from "@reduxjs/toolkit";

import conterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: conterReducer,
    auth: authReducer
  }
});



export default store;
