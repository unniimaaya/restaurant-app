import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./Features/cardslice";

export const store = configureStore({
  reducer: { Data: DataReducer },
});
