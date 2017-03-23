export const fetchReviews = () => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews'
  })
);


export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  });
};
