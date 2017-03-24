import * as ReviewAPIUtil from '../util/reviews_api_util';
import { receiveBook } from './book_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CLEAR_REVIEWS = "CLEAR_REVIEWS";

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


export const requestReviews = (bookId) => dispatch => (
  ReviewAPIUtil.fetchReviews(bookId)
    .then(res => dispatch(receiveReviews(res)))
);

export const createReview = (review) => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(book => dispatch(receiveBook(book)))
);
