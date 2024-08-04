import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBookWithId } from '../../utils/createBookWithId';
import { setError } from '../slices/errorSlice';

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchData = createAsyncThunk(
  'books/fetchData',
  async (url, thunkAPI) => {
    try {
      const res = await fetch(`${url}`);
      const book = await res.json();
      return book;
    } catch (error) {
      thunkAPI.dispatch(setError(`${error.message}`));
      console.log(error);
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBookReducer: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBookReducer: (state, action) => {
      return {
        ...state,
        books: state.books.filter((el) => el.id !== action.payload),
      };
    },
    toggleFavReducer: (state, action) => {
      return state.books.map((el) =>
        el.id === action.payload ? { ...el, isFav: !el.isFav } : el
      );
    },
  },
  // extraReducers: {
  //   [fetchData.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchData.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     if (action.payload.author && action.payload.title) {
  //       state.books.push(createBookWithId(action.payload, 'Api'));
  //     }
  //   },
  //   [fetchData.rejected]: (state) => {
  //     state.isLoading = true;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.author && action.payload.title) {
        state.books.push(createBookWithId(action.payload, 'Api'))
      }
    });
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { addBookReducer, deleteBookReducer, toggleFavReducer } =
  bookSlice.actions;

export const selectBooks = (state) => state.book.books;
export const isLoadingSelector = (state) => state.book.isLoading;

export default bookSlice.reducer;
