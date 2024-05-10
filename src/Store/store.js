import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../Reducers/ProductListSlice";
import basketReducer from "../Reducers/BasketSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    basketList: basketReducer,
  },
});
