import { RECEIVE_REVIEWS,
         RECEIVE_REVIEW,
         CLEAR_REVIEWS,
         RECEIVE_REVIEW_ERRORS,
         CLEAR_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _defaultState = {
  reviews: {},
  errors: []
};

const ReviewsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {
        [action.review.id]: action.review
      });
    case CLEAR_REVIEWS:
      newState.reviews = {};
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
        return state;
  }
};

export default ReviewsReducer;
