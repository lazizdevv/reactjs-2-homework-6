import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/product-reducer";
import { saveState } from "../utils/storage";

export const store = configureStore({
  reducer: {
    product: productsReducer,
  },
});

store.subscribe(() => {
  saveState("products", store.getState().product);
});