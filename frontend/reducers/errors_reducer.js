import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const ErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge([], action.errors);
      // if (action.errors === "Invalid Credentials" || action.errors === []) {
      //   return action.errors;
      // }
      // let errors = Object.keys(action.errors).map((prop) => { return `${action.errors[prop]}`; });
      // return errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
