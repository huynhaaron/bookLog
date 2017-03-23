import { RECEIVE_ONE_BOOKSHELF,
         REMOVE_ONE_BOOKSHELF } from '../actions/bookshelf_actions';
import merge from 'lodash/merge';

const _noShelfSelected = {}

const CurrentShelfReducer = (state = _noShelfSelected, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ONE_BOOKSHELF:
      return action.bookshelf;
    case REMOVE_ONE_BOOKSHELF:
      return _noShelfSelected;
    default:
      return state;
  }
};


export default CurrentShelfReducer;
