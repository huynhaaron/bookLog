import React, { Component } from 'react';
import { Link } from 'react-router';
import AddToShelfContainer from './add_to_shelf_container';
import ReviewFormContainer from './review_form_container';

class BookDetail extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(previousProps) {
      this.props.requestBook(this.props.params.bookId);
      this.props.requestAllBookshelves();
  }
  // 
  // componentDidUpdate() {
  //   this.props.requestBook(this.props.params.bookId);
  // }



  routeIsCorrect() {
    return parseInt(this.props.params.bookId) === this.props.bookDetail.id;
  }

  createShelvedbook(e) {
		e.preventDefault();
		const shelvedbook = this.state;
		this.props.createShelvedbook(shelvedbook);
  }

  render() {
    const { reviews, bookDetail, bookshelves, currentUser, children } = this.props;


    let all_reviews = [];
    if (reviews) {
      let book_reviews = Object.keys(reviews).map((id) => reviews[id]);
        book_reviews.forEach ((review, idx) => {
          let single_review =
            <div className="review-item" key={idx} >
              <p className="review-title">{review.title}</p>
              <p className="review-author">posted by: {review.username}</p>
              <br />
              {review.body}
            </div>;
          all_reviews.push(single_review)
      });
    };


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
              {/* <li>{bookDetail.isbn ? `isbn:  ${bookDetail.isbn}` : ""}</li> */}
            <br />
              <li>{bookDetail.description ? `description:  ${bookDetail.description}` : ""}</li>
            </ul>

            {children}
          </section>

          <div>
            <section className="review-list-container">
              <p className="review-header">Reviews</p>
              {all_reviews}
            </section>

            <section>
              <ReviewFormContainer />
            </section>
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

export default BookDetail;
