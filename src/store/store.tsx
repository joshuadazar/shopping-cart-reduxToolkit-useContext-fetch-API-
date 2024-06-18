import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import ProductSlice from './productSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductSlice,
  },
});

export default store;
