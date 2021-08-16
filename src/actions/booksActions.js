import { FETCH_books } from "../types";
import { FILTER_books_BY_Genre, ORDER_books_BY_PRICE } from "../types";
export const fetchbooks = () => async (dispatch) => {
  const res = await fetch("/api/books");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_books,
    payload: data,
  });
};

export const filterProducts = (books, genre) => (dispatch) => {
  dispatch({
    type: FILTER_books_BY_Genre,
    payload: {
      books: genre,
      items:
        genre === ""
          ? books
          : books.filter((x) => x.availableGenre.indexOf(genre) >= 0),
    },
  });
};
export const sortProducts = (filteredbooks, sort) => (dispatch) => {
  const sortedbooks = filteredbooks.slice();
  if (sort === "latest") {
    sortedbooks.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedbooks.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedbooks);
  dispatch({
    type: ORDER_books_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedbooks,
    },
  });
};
