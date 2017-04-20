import React, { Component } from 'react';
import BookIndexItem from './books_index_item';
import { Link } from 'react-router';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['title', 'author']


class BooksIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentDidMount() {
    this.props.requestAllBooks();
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {

    const { books, currentUser, children } = this.props;

    const filteredBooks = books.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    if (currentUser) {
      return (
        <div className="books_index_container">
          <SearchInput className="search-input" placeholder="🔍 Search for a book" onChange={this.searchUpdated} />
          <div className="book_index_show_all">
            {filteredBooks.map(book => <BookIndexItem key={book.id} book={book} />)}
            { children }
          </div>
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
