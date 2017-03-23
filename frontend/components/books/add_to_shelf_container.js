import { connect } from 'react-redux';
import AddToShelf from './add_to_shelf';
import { requestBook } from '../../actions/book_actions';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';
import { createShelvedbook,
         deleteShelvedbook } from '../../actions/shelvedbook_actions';

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
  bookshelves: state.bookshelves,
  currentShelf: state.currentShelf
});

const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: () => dispatch(requestAllBookshelves()),
  createShelvedbook: (shelvedbook) => dispatch(createShelvedbook(shelvedbook)),
  deleteShelvedbook: (shelvedbook) => dispatch(deleteShelvedbook(shelvedbook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToShelf);
