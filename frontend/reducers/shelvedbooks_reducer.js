import { RECEIVE_SHELVEDBOOKS,
         RECEIVE_SHELVEDBOOK,
         REMOVE_SHELVEDBOOK } from '../actions/shelvedbook_actions';
import merge from 'lodash/merge';


const ShelvedbooksReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SHELVEDBOOKS:
      return action.shelvedbooks;
    case RECEIVE_SHELVEDBOOK:
      const newShelvedbook = {[action.shelvedbook.id]: action.shelvedbook};
      return merge({}, state, newShelvedbook);
    case REMOVE_SHELVEDBOOK:
      let newState = merge({}, state);
      delete newState[action.shelvedbook.id];
      return newState;
    default:
      return state;
  }
};

export default ShelvedbooksReducer;
