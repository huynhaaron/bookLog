import * as ShelvedbookAPIUtil from '../util/shelvedbooks_api_util.js';

export const RECEIVE_SHELVEDBOOKS = 'RECEIVE_SHELVEDBOOKS';
export const RECEIVE_SHELVEDBOOK = 'RECEIVE_SHELVEDBOOK';
export const REMOVE_SHELVEDBOOK = 'REMOVE_SHELVEDBOOK';


export const requestShelvedbooks = () => dispatch => {
  return ShelvedbookAPIUtil.fetchShelvedbooks()
  .then(shelvedbooks => dispatch(receiveShelvedbooks(shelvedbooks)))
}


export const createShelvedbook = (shelvedbook) => dispatch => (
  ShelvedbookAPIUtil.createShelvedbook(shelvedbook)
    .then(shelvedbook => dispatch(receiveShelvedbook(shelvedbook)))
);

export const deleteShelvedbook = (shelvedbook) => dispatch => (
  ShelvedAPIUtil.deleteShelvedbook(shelvedbook)
    .then(shelvedbook => dispatch(removeShelvedbook(shelvedbook)))
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
