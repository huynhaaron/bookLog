import { combineReducers } from 'redux';
import { USER_LOGOUT } from '../actions/session_actions';

import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';
import BookDetailReducer from './book_detail_reducer';
import BookshelvesReducer from './bookshelves_reducer';
import ReviewReducer from './review_reducer';
import ShelvedbooksReducer from './shelvedbooks_reducer';
import CurrentShelfReducer from './current_shelf_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer,
  bookDetail: BookDetailReducer,
  bookshelves: BookshelvesReducer,
  currentShelf: CurrentShelfReducer,
  reviews: ReviewReducer
});

const RootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default RootReducer;
