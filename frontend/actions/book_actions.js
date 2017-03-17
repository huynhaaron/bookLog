import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


export const requestAllBooks = () => dispatch => (
  BookAPIUtil.fetchAllBooks().then(books => dispatch(receiveAllBooks(books)))
)

export const requestBook = id => dispatch => (
  BookAPIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
);


export const receiveAllBooks = books => {
  return {
    type: RECEIVE_ALL_BOOKS,
    books
  };
};

export const receiveBook = book => {
  return {
    type: RECEIVE_BOOK,
    book
  };
};
