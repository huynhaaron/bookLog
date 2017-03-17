import { connect } from 'react-redux';
import BooksIndex from './books_index';
import { requestAllBooks } from '../../actions/book_actions';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  books: selectAllBooks(state)
});


const mapDispatchToProps = dispatch => ({
    requestAllBooks: () => dispatch(requestAllBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
