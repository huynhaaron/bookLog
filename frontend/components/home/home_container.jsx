import { connect } from 'react-redux';
import Home from './home';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';
import { requestAllBooks } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestAllBooks: () => dispatch(requestAllBooks()),
  requestAllBookshelves: () => dispatch(requestAllBookshelves())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
