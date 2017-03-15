import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import CreateUserContainer from './create_user/create_user_container';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
          <Route path="/" component={ App } />
          <Route path="/login" component={SessionFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_ensureLoggedIn} />
      </Router>
    </Provider>
  )
};

export default Root;
