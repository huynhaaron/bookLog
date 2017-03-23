import React, { Component } from 'react';


class BookDetail extends Component {
  componentDidMount() {
    this.props.requestBook(this.props.params.bookId);
    this.props.requestAllBookshelves();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.bookId !== nextProps.params.bookId) {
  //     this.props.requestBook(nextProps.params.bookId);
  //  }
  // }

  routeIsCorrect() {
    return parseInt(this.props.params.bookId) === this.props.bookDetail.id;
  }



  render() {

    const { bookDetail, bookshelves, currentUser, children } = this.props;

    let user_bookshelves = Object.keys(bookshelves).map((id) => bookshelves[id]);
    console.log(user_bookshelves);

    let list_of_user_bookshelves = user_bookshelves.map((bookshelf, idx) => {
      return <li key={idx}>{bookshelf.name}</li>
    })

    if (currentUser) {
      return (
        <div>
          <section className="book-detail-container">
            <figure>
              <img className="book-detail-image" src={bookDetail.cover_url} alt={bookDetail.title} />
              <div>
                  <p> Add this book to a shelf:
                    {list_of_user_bookshelves}
                  </p>
              </div>
            </figure>
            <ul>
              <li className="book-title">
                {bookDetail.title}
              </li>
              <li>{bookDetail.author ? `author:  ${bookDetail.author}` : ""}</li>
              <li>{bookDetail.pages ? `pages:  ${bookDetail.pages}` : ""}</li>
              <li>{bookDetail.avg_rating ? `avg rating:  ${bookDetail.avg_rating}` : ""}</li>
              <li>{bookDetail.isbn ? `isbn:  ${bookDetail.isbn}` : ""}</li>
              <li>{bookDetail.description ? `description:  ${bookDetail.description}` : ""}</li>
            </ul>
            {children}

          </section>


        </div>
        );
      } else {
        return (
          <div></div>
        )
    }
  }

}

export default BookDetail;
