import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { requestReviews } from '../../actions/review_actions';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  books: selectAllBooks(state),
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
    requestReviews: () => dispatch(requestReviews());
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
