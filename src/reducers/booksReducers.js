import {
  FETCH_books,
  FILTER_books_BY_Genre,
  ORDER_books_BY_PRICE,
} from "../types";

export const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_books_BY_Genre:
      return {
        ...state,
        genre: action.payload.genre,
        filteredItems: action.payload.items,
      };
    case ORDER_books_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case FETCH_books:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
