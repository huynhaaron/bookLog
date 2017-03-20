import { connect } from 'react-redux';
import Bookshelves from './bookshelves';
import { requestAllBookshelves,
         createBookshelf,
         updateBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookshelves: Object.keys(state.bookshelves).map(id => state.bookshelves[id]),
});


const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: () => dispatch(requestAllBookshelves()),
  createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
  updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
  deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookshelves);
