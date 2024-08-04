import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/bookSlice";
import filterReducer from './slices/filterSlice'
import errorReducer from './slices/errorSlice'

export const store = configureStore({
  reducer:{
    book: bookSlice,
    filter:filterReducer,
    error:errorReducer
  }
})