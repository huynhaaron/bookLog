import * as ShelvedbookAPIUtil from '../util/shelvedbooks_api_util.js';
import { receiveBookshelf } from './bookshelf_actions';
export const RECEIVE_SHELVEDBOOKS = 'RECEIVE_SHELVEDBOOKS';
export const RECEIVE_SHELVEDBOOK = 'RECEIVE_SHELVEDBOOK';
export const REMOVE_SHELVEDBOOK = 'REMOVE_SHELVEDBOOK';



export const createShelvedbook = (shelvedbook) => dispatch => (
  ShelvedbookAPIUtil.createShelvedbook(shelvedbook)
    .then((bookshelf)=> dispatch(receiveBookshelf(bookshelf)))
);

export const deleteShelvedbook = (shelvedbook) => dispatch => (
  ShelvedbookAPIUtil.deleteShelvedbook(shelvedbook)
    .then((bookshelf) => dispatch(receiveBookshelf(bookshelf)))
);


export const receiveShelvedbooks = (shelvedbooks) => {
  return {
    type: RECEIVE_SHELVEDBOOKS,
    shelvedbooks
  };
};


export const receiveShelvedbook = (shelvedbook) => {
  return {
    type: RECEIVE_SHELVEDBOOK,
    shelvedbook
  };
};

export const removeShelvedbook = (shelvedbook) => {
  return {
    type: REMOVE_SHELVEDBOOK,
    shelvedbook
  };
};
