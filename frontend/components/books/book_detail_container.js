import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook } from '../../actions/book_actions';

const mapStateToProps = ({ bookDetail, session }) => ({
  bookDetail,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
