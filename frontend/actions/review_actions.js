import * as ReviewAPIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CLEAR_REVIEWS = "CLEAR_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const clearReviews = () => ({
  type: CLEAR_REVIEWS
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestReviews = (bookId) => dispatch => (
  ReviewAPIUtil.fetchReviews(bookId)
    .then(res => dispatch(receiveReviews(res)))
);

export const createReview = (review) => dispatch => (
  ReviewAPIUtil.createReview(review)
  .then(res => dispatch(receiveReview(res)))
  // .fail(err => dispatch(receiveReviewErrors(err.responseJSON)))
);
