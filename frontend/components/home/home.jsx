import React from 'react';

import BooksIndexContainer from '../books/books_index_container';
import BookshelvesIndexContainer from '../bookshelves/bookshelves_index_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.props.requestAllBooks();
  }

  render () {
    return (
      <div className="home-container" className="home">
        <div className="bookshelves-container">
        <BookshelvesIndexContainer />
        </div>
        <BooksIndexContainer />
      </div>
    );
  }

}


export default Home;
