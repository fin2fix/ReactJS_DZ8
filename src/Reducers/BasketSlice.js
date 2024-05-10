import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "basketList",
  initialState: {
    array: [],
  },
  reducers: {
    addBasket: (state, { payload: newBasketItem }) => {
      if (state.array.some((item) => item.id === newBasketItem.id)) {
        return;
      }
      state.array.push(newBasketItem);
    },
    deleteBasket: (state, { payload: basketItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== basketItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addBasket, deleteBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
