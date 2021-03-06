import React from 'react';
import { Link, withRouter } from 'react-router';

const BookIndexItem = ({ book, router }) => (
  <div>
    <Link to={`/book/${book.id}`}>
      <img className="book_index_cover_image" src={book.cover_url}
        alt={book.name} />
    </Link>
  </div>
);
export default withRouter(BookIndexItem);
