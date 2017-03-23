import React, { Component } from 'react';
import BookIndexItem from './books_index_item';
import { Link } from 'react-router';

class BooksIndex extends Component {

  componentDidMount() {
    this.props.requestAllBooks();
  }

  render() {
    const { books, currentUser, children } = this.props;
    if (currentUser) {
      return (
        <div className="book_index_show_all">
          {books.map(book => <BookIndexItem key={book.id} book={book} />)}
          { children }
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  };

}

export default BooksIndex;
