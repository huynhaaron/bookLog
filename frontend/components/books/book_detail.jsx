import React, { Component } from 'react';
import { Link } from 'react-router';
import AddToShelfContainer from './add_to_shelf_container';

class BookDetail extends Component {

  constructor(props){
    super(props);
  }
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

  createShelvedbook(e) {
		e.preventDefault();
    console.log(e.currentTarget.value);
		const shelvedbook = this.state;
		// this.props.createShelvedbook(shelvedbook);
  }

  render() {

    const { bookDetail, bookshelves, currentUser, children } = this.props;

    let user_bookshelves = Object.keys(bookshelves).map((id) => bookshelves[id]);

    let list_of_user_bookshelves = user_bookshelves.map((bookshelf, idx) => {
      return <li onClick={this.createShelvedbook} key={idx}>{bookshelf.name}</li>
    })

    if (currentUser) {
      return (
        <div>
          <section className="book-detail-container">
            <figure>
              <img className="book-detail-image" src={bookDetail.cover_url} alt={bookDetail.title} />
              <div>
                  <AddToShelfContainer />
              </div>
            </figure>


            <ul className="book-detail-information">
              <li>
                <div className="book-detail-header">
                    <p><Link to={`/`}>   Home ></Link> {bookDetail.title}</p>
                </div>
              </li>
              <li className="book-title">
                {bookDetail.title}
              </li>

              <li>{bookDetail.author ? `author:  ${bookDetail.author}` : ""}</li>
              <li>{bookDetail.pages ? `pages:  ${bookDetail.pages}` : ""}</li>
              <li>{bookDetail.avg_rating ? `avg rating:  ${bookDetail.avg_rating}` : ""}</li>
              <li>{bookDetail.isbn ? `isbn:  ${bookDetail.isbn}` : ""}</li>
            <br />
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
