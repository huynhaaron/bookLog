import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
