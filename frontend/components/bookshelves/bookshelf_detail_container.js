import { connect } from 'react-redux';
import BookshelfDetail from './bookshelf_detail';
import { requestBookshelf } from '../../actions/bookshelf_actions';


const mapStateToProps = (state,ownProps) => ({
  shelvedbooks: state.bookshelves.shelvedbooks,
  currentShelf: state.currentShelf,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestBookshelf: (bookshelf) => dispatch(requestBookshelf(bookshelf)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfDetail);
