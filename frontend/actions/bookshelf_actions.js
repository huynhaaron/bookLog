import * as BookshelfAPIUtil from '../util/bookshelves_api_util';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';
export const RECEIVE_ONE_BOOKSHELF = 'RECEIVE_ONE_BOOKSHELF';
export const REMOVE_ONE_BOOKSHELF = 'REMOVE_ONE_BOOKSHELF';

export const requestAllBookshelves = () => dispatch => {
  return BookshelfAPIUtil.fetchBookshelves()
  .then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)))
}

export const requestBookshelf = (bookshelf) => dispatch => {
  return BookshelfAPIUtil.fetchBookshelf(bookshelf)
  .then(bookshelf => dispatch(receiveOneBookshelf(bookshelf)))
}

export const createBookshelf = (bookshelf) => dispatch => (
  BookshelfAPIUtil.createBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const updateBookshelf = (bookshelf) => dispatch => (
  BookshelfAPIUtil.updateBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const deleteBookshelf = (bookshelf) => dispatch => {
  return (
    BookshelfAPIUtil.deleteBookshelf(bookshelf)
      .then(bookshelf => {
        return dispatch(removeBookshelf(bookshelf));
      }
    )
  )
}

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

export const receiveOneBookshelf = (bookshelf) => {
  return {
    type: RECEIVE_ONE_BOOKSHELF,
    bookshelf
  }
}

export const removeCurrentBookshelf = (bookshelf) => {
  return {
    type: REMOVE_ONE_BOOKSHELF,
    bookshelf
  }
}
