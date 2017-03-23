import { connect } from 'react-redux';
import BookshelfDetail from './bookshelf_detail';
import {  requestBookshelf,
          createBookshelf,
          updateBookshelf,
          deleteBookshelf,
          removeCurrentBookshelf } from '../../actions/bookshelf_actions';


const mapStateToProps = (state,ownProps) => ({
  shelvedbooks: state.bookshelves.shelvedbooks,
  currentShelf: state.currentShelf,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestBookshelf: (bookshelf) => dispatch(requestBookshelf(bookshelf)),
  createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
  deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf)),
  updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
  removeCurrentBookshelf: () => dispatch(removeCurrentBookshelf())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfDetail);
