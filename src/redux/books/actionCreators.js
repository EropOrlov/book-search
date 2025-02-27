import * as a from './actionTypes'

export const addBook = (newBook)=>{
  return {
    type: a.ADD_BOOK,
    payload: newBook
  }
}

export const deleteBook = (id)=>{
  return {
    type:a.DELETE_BOOK,
    payload:id
  }
}

export const toggleFav = (id)=>{
  return {
    type:a.TOGGLE_FAV,
    payload:id
  }
}

export const fetchBook = (newBook)=>{
  return {
    type:a.FETCH_BOOK,
    payload:newBook
  }
}