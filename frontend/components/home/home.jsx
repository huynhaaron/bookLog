import React from 'react';

import BooksIndexContainer from '../books/books_index_container';
import BookshelvesContainer from '../bookshelves/bookshelves_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestAllBooks();
  }

  componentDidMount() {
    this.props.requestAllBookshelves();
  }

  render () {
    return (
      <div className="home-container">
        <div className="bookshelves-container">
        <BookshelvesContainer />
        </div>
        <BooksIndexContainer />
      </div>
    );
  }

}

// const Home = ({ children }) => (
//   <div className="home-container">
//     <div className="bookshelves-container">
//     <BookshelvesContainer />
//     </div>
//     <BooksIndexContainer />
//
//     { children }
//   </div>
// );


export default Home;
