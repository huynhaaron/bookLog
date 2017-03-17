import React from 'react';

const BookIndexItem = ({ book }) => (
  <li className="book_index_container">
      <img className="book_index_cover_image" src={book.cover_url}
        alt={book.name} />
    <span>{book.title}</span>
    <br />
    <span>{book.author}</span>
  </li>
);
export default BookIndexItem;
