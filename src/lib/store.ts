import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
