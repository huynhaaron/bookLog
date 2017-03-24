import React, { Component } from 'react';
import { Link } from 'react-router';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { book_id: 0,
                   title: "",
                   body: "",
                   rating: 5,
                   user_id: this.props.currentUser.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bookDetail.id !== this.props.bookDetail.id){
      this.setState({book_id: nextProps.bookDetail.id})
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.createReview(review)
      .then(() => this.setState({ title: "", body: ""}));
  }


  render() {
    return (
      <form  className="review-form-container" onSubmit={this.handleSubmit}>
        <p className="review-header">Add a review!</p>
        <br/>
        <input type="text"
          value={this.state.title}
          placeholder="title"
          className="review-form-titleinput"
          onChange={this.update("title")} />
        <br/>
        <textarea className="review-form-textarea"
          value={this.state.body}
          onChange={this.update("body")} />
        <br/>
        <input className="review-form-submit-button" type="submit" value="Submit" />
      </form>
    )
  };


}

export default ReviewForm;
