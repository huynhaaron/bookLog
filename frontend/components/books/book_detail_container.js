import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook } from '../../actions/book_actions';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
  bookshelves: state.bookshelves,
  currentUser: state.session.currentUser,
  currentShelf: state.currentShelf
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id)),
  requestAllBookshelves: () => dispatch(requestAllBookshelves())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
