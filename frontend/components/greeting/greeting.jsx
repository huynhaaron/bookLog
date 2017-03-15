import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import CreateUserContainer from '../create_user/create_user_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>Logged in as {this.props.currentUser.username}</h3>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <nav>
            <SessionFormContainer />
          </nav>

          <span>
            <CreateUserContainer />
          </span>
        </div>
      );
    }
  }
}

export default Greeting;
