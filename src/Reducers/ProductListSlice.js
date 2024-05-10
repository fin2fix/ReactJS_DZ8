import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../Components/ProductData";

export const ProductListSlice = createSlice({
  name: "productList",
  initialState: {
    array: ProductData,
  },
  reducers: {
    deleteProduct: (state, { payload: deletedProduct }) => {
      state.array = state.array.filter(
        (product) => product.id !== deletedProduct.id
      );
    },

    updateProduct: (state, { payload: updatedProduct }) => {
      state.array = state.array.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
  },
});

export const { deleteProduct, updateProduct } = ProductListSlice.actions;
export default ProductListSlice.reducer;
