import { connect } from 'react-redux';
import BookshelvesIndex from './bookshelves_index';
import { requestAllBookshelves,
         requestBookshelf,
         createBookshelf,
         updateBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookshelves: Object.keys(state.bookshelves).map(id => state.bookshelves[id])
});


const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: () => dispatch(requestAllBookshelves()),
  requestBookshelf: (bookshelf) => dispatch(requestBookshelf(bookshelf)),
  createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
  deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf)),
  updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelvesIndex);
