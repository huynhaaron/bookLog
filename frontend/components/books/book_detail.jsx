import React, { Component } from 'react';


class BookDetail extends Component {
  componentDidMount() {
    this.props.requestBook(this.props.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.bookId !== nextProps.params.bookId) {
      this.props.requestBook(nextProps.params.bookId);
   }
  }

  routeIsCorrect() {
    return parseInt(this.props.params.bookId) === this.props.bookDetail.id;
  }

  render() {
    const { bookDetail, children } = this.props;

    return (
      <section className="book-detail-container">
        <figure>
          <img className="book-detail-image" src={bookDetail.cover_url} alt={bookDetail.title} />
        </figure>
        <ul>
          <li className="book-title">
            {bookDetail.title}
          </li>
          <li>{bookDetail.author ? `author:  ${bookDetail.author}` : ""}</li>
          <li>{bookDetail.pages ? `pages:  ${bookDetail.pages}` : ""}</li>
          <li>{bookDetail.publisher ? `publisher:  ${bookDetail.publisher}` : ""}</li>
          <li>{bookDetail.publish_date ? `publish_date:  ${bookDetail.publish_date}` : ""}</li>
          <li>{bookDetail.avg_rating ? `avg rating:  ${bookDetail.avg_rating}` : ""}</li>
          <li>{bookDetail.isbn ? `isbn:  ${bookDetail.isbn}` : ""}</li>
          <li>{bookDetail.language ? `language:  ${bookDetail.language}` : ""}</li>
          <li>{bookDetail.description ? `description:  ${bookDetail.description}` : ""}</li>
        </ul>
        {children}
      </section>
    );
  }

}

export default BookDetail;
