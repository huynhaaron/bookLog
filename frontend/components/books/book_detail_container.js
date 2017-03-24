import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook } from '../../actions/book_actions';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';
import { requestReviews } from '../../actions/review_actions';
import { createShelvedbook,
        deleteShelvedbook } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
  bookshelves: state.bookshelves,
  currentUser: state.session.currentUser,
  currentShelf: state.currentShelf,
  reviews: state.bookDetail.reviews
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id)),
  requestReviews: id => dispatch(requestReviews(id)),
  requestAllBookshelves: () => dispatch(requestAllBookshelves()),
  createShelvedbook: (shelvedbook) => dispatch(createShelvedbook(shelvedbook)),
  deleteShelvedbook: (shelvedbook) => dispatch(deleteShelvedbook(shelvedbook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
