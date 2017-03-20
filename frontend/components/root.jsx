import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { requestAllBooks } from '../actions/book_actions';
import { requestAllBookshelves } from '../actions/bookshelf_actions';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import CreateUserContainer from './create_user/create_user_container';
import BooksIndexContainer from './books/books_index_container';
import BookDetailContainer from './books/book_detail_container';
import BookshelvesContainer from './bookshelves/bookshelves_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const requestCollectionOnEnter = () => {
    store.dispatch(requestAllBooks());
    store.dispatch(requestAllBookshelves());
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
          <Route path="/" component={ App } >
            <IndexRoute component={BooksIndexContainer} onEnter={requestCollectionOnEnter}/>
            <Route path="books/:bookId" component={BookDetailContainer}/>
            <Route path='bookshelves' component={BookshelvesContainer} />
            <Route path="login" component={SessionFormContainer} onEnter={_ensureLoggedIn} />
            <Route path="signup" component={SessionFormContainer} onEnter={_ensureLoggedIn} />
          </Route>
      </Router>
    </Provider>
  )
};

export default Root;
