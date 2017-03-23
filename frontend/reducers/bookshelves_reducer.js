import { RECEIVE_ALL_BOOKSHELVES,
         RECEIVE_BOOKSHELF,
         REMOVE_BOOKSHELF,
         RECEIVE_ONE_BOOKSHELF } from '../actions/bookshelf_actions';
import merge from 'lodash/merge';


const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      const newBookshelf = {[action.bookshelf.id]: action.bookshelf};
      return merge({}, state, newBookshelf);
    case REMOVE_BOOKSHELF:
      let newState = merge({}, state);
      delete newState[action.bookshelf.id];
      return newState;
    default:
      return state;
  }
};


export default BookshelvesReducer;
