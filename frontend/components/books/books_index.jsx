import React, { Component } from 'react';
import BookIndexItem from './books_index_item';

class BooksIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllBooks;
  }

  render() {
    const { books, children } = this.props;
    return (
      <ul>
        {books.map(book => <BookIndexItem key={book.id} book={book} />)}
        { children }
      </ul>
    )
  };

}

export default BooksIndex;
