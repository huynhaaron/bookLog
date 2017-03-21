import {
  START_LOADING_USER_BOOKSHELVES
} from '../actions/bookshelf_actions';


const initialState = {
  indexLoading: false,
  detailLoading: false
};



export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_BOOKSHELVES:
    case RECEIVE_BOOKSHELF:
    case REMOVE_BOOKSHELF:
      return initialState;
    case START_LOADING_USER_BOOKSHELVES:
      return Object.assign({}, state, { indexLoading: true });
    case CREATE_POKEMON:
    case START_LOADING_SINGLE_POKEMON:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};
