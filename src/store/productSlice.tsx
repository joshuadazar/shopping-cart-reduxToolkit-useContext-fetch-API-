import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../models/IProducts';

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    product: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = state.product.concat(action.payload);
    },
    removeProduct: (state, action) => {
      let firstMatchFound = false;
      state.product = state.product.filter((prod: IProduct) => {
        if (prod.id === action.payload && !firstMatchFound) {
          firstMatchFound = true;
          return false;
        }
        return prod;
      });
    },
  },
});

export const { addProduct, removeProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
