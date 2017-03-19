import React, { Component } from 'react';
import BookIndexItem from './books_index_item';

class BooksIndex extends Component {

  componentDidMount() {
    this.props.requestAllBooks;
  }

  render() {
    const { books, children } = this.props;
    return (
      <div className="book_index_show_all">
        {books.map(book => <BookIndexItem key={book.id} book={book} />)}
        { children }
      </div>
    )
  };

}

export default BooksIndex;