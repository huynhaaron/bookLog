import React from 'react';

import BooksIndexContainer from './books/books_index_container';
import BookshelvesContainer from './bookshelves/bookshelves_container';


// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render () {
//     console.log("Im in Home");
//     return (
//       <div>
//         <p>Home</p>
//         <BooksIndexContainer />
//         <BookshelvesContainer />
//       </div>
//     );
//   }
//
// }

const Home = ({ children }) => (
  <div className="home-container">
    <div className="bookshelves-container">
    <BookshelvesContainer />
    </div>
    <BooksIndexContainer />

    { children }
  </div>
);


export default Home;
