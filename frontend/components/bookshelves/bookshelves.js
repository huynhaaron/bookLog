import React, { Component } from 'react';
import { Link } from 'react-router';

class Bookshelves extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
                   editState: false};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.requestAllBookshelves();
  }


  update(field) {
    console.log(this.state);
		return e => this.setState({[field]: e.currentTarget.value});
	}

  handleSubmit(e) {
    e.preventDefault();
    const bookshelf = this.state;
    this.props.createBookshelf(bookshelf)
      .then(() => this.setState({ name: ""}));
  }


  handleDelete(bookshelf) {
    return (e) => {
      e.preventDefault();
      this.props.deleteBookshelf(bookshelf);
    };
  }

  toggleEditState(e) {
    e.preventDefault();
    this.setState({ editState: !this.state.editState });
  }

  render() {
    const bookshelves = this.props.bookshelves.map((bookshelf, idx) => {
      return (
        <span key={idx}>
          <li className="shelf-text" key={idx}> {bookshelf.name}
          <button key={bookshelf} onClick={this.handleDelete.bind(bookshelf)}>
            <img src="https://res.cloudinary.com/booklog/image/upload/v1490041649/rubbish-bin_lx1eag.png"/>
          </button>
          </li>
        </span>
      )
    });

    if (this.props.currentUser) {
      return (
        <div className="bookshelves-container">
          <h2 className="bookshelves-header">bookshelves</h2>
          <button onClick={this.toggleEditState.bind(this)}> (edit) </button>

          <ul>
            {bookshelves}
          </ul>

          <br />
          <p><strong>Add a Shelf:</strong></p>
          <form onSubmit={ this.handleSubmit }>
            <input
              className="shelf-text-input"
              type="text"
              onChange={this.update("name")}
              />
            <input className="shelf-add-button" type="submit" value="add" />
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  };


}

export default Bookshelves;
