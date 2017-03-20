import React from 'react';

import NavContainer from './nav/nav_container';
// import BooksIndex from './books/books_index_container';
// import BookshelvesContainer from './bookshelves/bookshelves_container';
import Home from './home_container';

const App = ({ children }) => (
  <div >
    <NavContainer />
    { children }
  </div>
);

export default App;
