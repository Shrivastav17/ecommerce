import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './reducers/categorySlice';
import brandReducer from './reducers/brandSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    category:categoryReducer,
    brand:brandReducer,
    cart:cartReducer
  },
})

export default store;