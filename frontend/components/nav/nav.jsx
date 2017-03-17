import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import CreateUserContainer from '../create_user/create_user_container';
import ErrorList from '../error_list';
import BooksIndex from '../books/books_index';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ErrorList errors={this.props.errors} />
      );
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <div className="login-form">
            <div className="logo">
              <Link to={`/`}>
                <img src={"https://res.cloudinary.com/booklog/image/upload/v1489615791/open-book32_hdbp4s.png"} alt="Logo" />
              </Link>
              <Link to={`/`}>
                <p className="main-logo-text"><strong>BookLog</strong></p>
              </Link>
            </div>
            <div className="login-form-right">
              <h2>Hi {this.props.currentUser.username}</h2>
              <div className="home-button">
                <Link to={`/`}>
                <img src="https://res.cloudinary.com/booklog/image/upload/v1489782963/home_deekjt.png" alt="Home"/>
                </Link>
              </div>
              <button className="login-button" onClick={ this.props.logout }>Logout</button>
            </div>
          </div>
      </div>
      )
    } else {
      return (
        <div>
          <div className="login-form">
            <div className="logo">
              <img src={"https://res.cloudinary.com/booklog/image/upload/v1489615791/open-book32_hdbp4s.png"} alt="Logo" />
              <h1 className="login-form-left">Book<strong>Log</strong></h1>
            </div>
            <SessionFormContainer />
          </div>
          {this.renderErrors()}


          <div className="create-user-container">
            <CreateUserContainer />
          </div>

        </div>
      );
    }
  }
}

export default Nav;
