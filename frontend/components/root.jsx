import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import CreateUserContainer from './create_user/create_user_container';
import BooksIndexContainer from './books/books_index_container';
import BookDetailContainer from './books/book_detail_container';
import BookshelvesIndexContainer from './bookshelves/bookshelves_index_container';
import BookshelfDetailContainer from './bookshelves/bookshelf_detail_container';

import { requestAllBooks } from '../actions/book_actions';
import { requestAllBookshelves } from '../actions/bookshelf_actions';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _getBookshelves = () => {
    store.dispatch(requestAllBookshelves());
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
          <Route path="/" component={ App } >
          <IndexRoute component={ HomeContainer } />
            {/* <Route path="books" component={BooksIndexContainer}/> */}
            <Route path="book/:bookId" component={BookDetailContainer}/>
            <Route path="bookshelves/:bookshelfId" component={BookshelfDetailContainer} />
            <Route path="login" component={SessionFormContainer} />
            <Route path="signup" component={SessionFormContainer} />
          </Route>
      </Router>
    </Provider>
  )
};

export default Root;
