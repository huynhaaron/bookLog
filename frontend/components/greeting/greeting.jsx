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
          <img src={"http://res.cloudinary.com/booklog/image/upload/v1489615791/open-book32_hdbp4s.png"} alt="Logo" />
          <p className="main-logo-text">book<b>Log</b></p>
          <div className="login-form-right">
            <h3>Logged in as {this.props.currentUser.username}</h3>
            <button onClick={ this.props.logout }>Logout</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="login-form">
            <div className="logo">
              <img src={"http://res.cloudinary.com/booklog/image/upload/v1489615791/open-book32_hdbp4s.png"} alt="Logo" />
              <h1 className="login-form-left">  bookLog</h1>
            </div>
            <SessionFormContainer />
          </div>

          <div className="create-user-container">
            <CreateUserContainer />
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
