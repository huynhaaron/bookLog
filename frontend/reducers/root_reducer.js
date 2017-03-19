import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';
import BookDetailReducer from './book_detail_reducer';
import BookshelvesReducer from './book_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer,
  bookDetail: BookDetailReducer,
  bookshelves: BookshelvesReducer

});

export default RootReducer;
