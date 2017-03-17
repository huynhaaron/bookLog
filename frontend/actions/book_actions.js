import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


export const requestBooks = () => dispatch => (
  BookAPIUtil.fetchAllBooks().then(books => dispatch(receiveBooks(books)))
)

export const requestBook = id => dispatch => (
  BookAPIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
);


export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveBook = book => {
  return {
    type: RECEIVE_BOOK,
    book
  };
};
