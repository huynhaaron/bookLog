import { connect } from 'react-redux';
import Shelvedbooks fom './shelvedbooks';
import { requestShelvedbooks,
         createShelvedbook,
         deleteShelvedbook } from '../../actions/shelvedbook_actions';

const mapStateToProps = state => ({
  bookshelves: Object.keys(state.bookshelves).map(id => state.bookshelves[id]),
  books: Oject.keys(state.books).map(id => state.books[id])
});


const mapDispatchToProps = dispatch => ({
  requestShelvedbooks: () => dispatch(requestShelvedbooks()),
  createShelvedbook: (shelvedbook) => dispatch(createShelvedbook(shelvedbook)),
  deleteShelvedbook: (shelvedbook) => dispatch(deleteShelvedbook(shelvedbook))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelvedBooks);
