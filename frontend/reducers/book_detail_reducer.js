import { RECEIVE_BOOK } from '../actions/book_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK:
      return merge({}, action.book);
    default:
      return state;
  }
}
