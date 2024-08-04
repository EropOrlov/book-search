import * as a from './actionTypes';

const initialState = [];

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK:
      return state.filter((el) => el.id !== action.payload);
    case a.TOGGLE_FAV:
      return state.map((el) =>
        el.id === action.payload ? { ...el, isFav: !el.isFav } : el
      );
    case a.FETCH_BOOK:
      return state;
    default:
      return state;
  }
};
