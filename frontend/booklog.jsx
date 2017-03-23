import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { requestAllBooks, requestBook } from './actions/book_actions';
import { requestAllBookshelves, deleteBookshelf } from './actions/bookshelf_actions';
import { requestShelvedbooks, createShelvedbook } from './actions/shelvedbook_actions';

import { selectAllBooks } from './reducers/selectors';


window.signup = signup;
window.login = login;
window.logout = logout;
window.requestAllBooks = requestAllBooks;
window.selectAllBooks = selectAllBooks;
window.requestBook = requestBook;
window.requestAllBookshelves = requestAllBookshelves;
window.deleteBookshelf = deleteBookshelf;
window.requestShelvedbooks = requestShelvedbooks;
window.createShelvedbook = createShelvedbook;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = store;
  } else {
    store = configureStore();
    window.store = store;
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
