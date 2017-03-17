import React from 'react';
import { Link } from 'react-router';

const BookIndexItem = ({ book }) => (
  <li className="book_index_container">
    <Link to={`/books/${book.id}`}>
      <img className="book_index_cover_image" src={book.cover_url}
        alt={book.name} />
    </Link>
    <br />
  </li>
);
export default BookIndexItem;
