import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { PixabayImage } from './Pixabay';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    items: [] as PixabayImage[],
    query: '',
    page: 1,
  },
  reducers: {
    appendImages: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.page += 1;
    },
    resetImages: (state, action) => {
      state.items = action.payload;
      state.page = 1;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { appendImages, resetImages, setQuery } = imagesSlice.actions;

export const selectAllImages = (state: RootState) => state.images.items;

export const selectImageById = (id: number) => (state: RootState) => state.images.items.find(post => post.id === id);

export const selectImagesQuery = (state: RootState) => state.images.query;

export const selectImagesPage = (state: RootState) => state.images.page;

const imagesReducer = imagesSlice.reducer;
export default imagesReducer;
