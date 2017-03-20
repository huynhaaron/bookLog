import React from 'react';

import NavContainer from './nav/nav_container';

import BookshelvesContainer from './bookshelves/bookshelves_container';


const App = ({ children }) => (
  <div >
    <NavContainer />
    <BookshelvesContainer />
    { children }
  </div>
);

export default App;
