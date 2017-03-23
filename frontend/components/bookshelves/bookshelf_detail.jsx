import React, { Component } from 'react';
import { Link } from 'react-router';
import BookIndexItem from '../books/books_index_item';
import BookshelvesIndexContainer from './bookshelves_index_container';

class BookshelfDetail extends Component {

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestBookshelf(this.props.params.bookshelfId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.bookshelfId !== newProps.params.bookshelfId) {
      this.props.requestBookshelf(newProps.params.bookshelfId);
    }
  }

  render() {
    const shelvedbooks = this.props.currentShelf.shelvedbooks;
    let list_of_books;

    if (shelvedbooks) {
      let collection = Object.keys(shelvedbooks).map((id) => shelvedbooks[id]);
      let list_of_books = collection.map((book, idx) => {
        return <BookIndexItem key={book.id} book={book} />
      })
      return (
          <div className="home-container">
            <BookshelvesIndexContainer />
            <div className="book_index_show_all">
              <div className="bookshelves-detail-header">
                <p>
                  <p><Link to={`/`}>   Home ></Link> {this.props.currentShelf.name} books</p>
                </p>
              </div>
              {list_of_books}
            </div>
          </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default BookshelfDetail;
