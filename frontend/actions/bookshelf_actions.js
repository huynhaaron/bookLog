import * as BookshelfAPIUtil from '../util/bookshelves_api_util';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';


export const requestAllBookshelves = () => dispatch => (
  BookshelfAPIUtil.fetchBookshelves()
  .then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)))
)

export const createBookshelf = (bookshelf) => dispatch => (
  BookshelfAPIUtil.createBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const updateBookshelf = (bookshelf) => dispatch => (
  BookshelfAPIUtil.updateBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const deleteBookshelf = (bookshelf) => dispatch => (
  BookshelfAPIUtil.deleteBookshelf(bookshelf)
    .then(bookshelf => dispatch(removeBookshelf(bookshelf)))
)

export const receiveAllBookshelves = (bookshelves) => {
  return {
    type: RECEIVE_ALL_BOOKSHELVES,
    bookshelves
  };
};

export const receiveBookshelf = (bookshelf) => {
  return {
    type: RECEIVE_BOOKSHELF,
    bookshelf
  };
};

export const removeBookshelf = (bookshelf) => ({
  type: REMOVE_BOOKSHELF,
  bookshelf
});
