import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, requestReviews } from '../../actions/review_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  bookDetail: state.bookDetail
});


const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
