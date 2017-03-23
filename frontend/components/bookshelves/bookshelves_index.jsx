import React, { Component } from 'react';
import { Link } from 'react-router';

class BookshelvesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
                   isEditing: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.currentUser && nextprops.bookshelves.length <= 1) {
      nextprops.requestAllBookshelves();
    }
  }


  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.props.requestAllBookshelves();
  //   }
  // }

  update(field) {
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
      this.setState({isEditing: false});
    };
  }

  toggleEditState(e) {
    e.preventDefault();
    let editing = !this.state.isEditing;
    this.setState({ isEditing: editing });
  }

  render() {

    const bookshelves = this.props.bookshelves.map((bookshelf, idx) => {
      return (
        <span key={idx}>
          <li className="shelf-text" key={idx}>
            <Link to={`bookshelves/${bookshelf.id}`}>
            {bookshelf.name}
            </Link>
            {!this.state.isEditing ? "" :
              bookshelf.name === "all" ? "" :
              bookshelf.name === "currently-reading" ? "" :
              bookshelf.name === "read" ?  "" :
              bookshelf.name ===  "to-read" ? "" :
              <button key={bookshelf} onClick={this.handleDelete(bookshelf)}>
                <img src="https://res.cloudinary.com/booklog/image/upload/v1490041649/rubbish-bin_lx1eag.png"/>
              </button>}
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
          <form name="add-shelf-form" onSubmit={ this.handleSubmit }>
            <input
              className="shelf-text-input"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
            <input className="shelf-add-button" type="submit" value="add" />
          </form>

        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  };


}

export default BookshelvesIndex;
