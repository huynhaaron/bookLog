import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import CreateUser from './create_user';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
