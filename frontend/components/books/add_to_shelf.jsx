import React, { Component } from 'react';

class AddToShelf extends Component {

  constructor(props){
    super(props);
    this.state = {bookshelf_id: 0, book_id: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({bookshelf_id: e.target.value, book_id: this.props.bookDetail.id});
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('state is: ' + this.state.bookshelf_id + this.state.book_id);
  }

  render() {
    const { bookDetail, bookshelves, currentShelf } = this.props;

    let user_bookshelves = Object.keys(bookshelves).map((id) => bookshelves[id]);

    let list_of_user_bookshelves = user_bookshelves.map((bookshelf, idx) => {
      let handleClick = this.props.createShelvedbook;
      let status="_";
      return <option value={bookshelf.id}
              key={idx}>
              {bookshelf.name}
             </option>
    })

    return (
      <div className="shelf-selector">
          <select value={this.state.bookshelf_id} onChange={this.handleChange} >
            <option disabled defaultValue hidden>Shelve this book!</option>
            {list_of_user_bookshelves}
          </select>
      </div>
    )
  }


}

export default AddToShelf;
