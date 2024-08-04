import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFav: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleReducer: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorReducer: (state, action) => {
      return { ...state, author: action.payload };
    },
    setFavReducer: (state) => {
      return { ...state, onlyFav: !state.onlyFav };
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleReducer,
  setAuthorReducer,
  setFavReducer,
  resetFilters,
} = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title;
export const selectFilterAuthor = (state) => state.filter.author;
export const selectFilterFav = (state) => state.filter.onlyFav;

export default filterSlice.reducer;
