import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestBooks: () => dispatch(requestBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
