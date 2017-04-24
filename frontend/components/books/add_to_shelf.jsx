import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class AddToShelf extends Component {

  constructor(props){
    super(props);
    this.state = {bookshelf_id: 0, book_id: 0};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bookDetail.id !== this.props.bookDetail.id){
      this.setState({book_id: nextProps.bookDetail.id})
    }
  }

  handleAdd(e) {
    this.setState({bookshelf_id: e.target.value}, () => {
      this.props.createShelvedbook(this.state);
    })
  }

  handleRemove(e) {
    this.setState({bookshelf_id: e.target.value}, () => {
      this.props.deleteShelvedbook(this.state)
        .then(this.props.requestAllBookshelves());
    })
  }


  render() {
    const { bookDetail, bookshelves,
            createShelvedbook, deleteShelvedbook} = this.props;
    let user_bookshelves = Object.keys(bookshelves).map((id) => bookshelves[id]);

    let list_of_user_bookshelves = user_bookshelves.map((bookshelf, idx) => {
      this.handleClick = this.handleAdd;
      let status="☑️️";
      let targetShelf = bookshelf;
      if (targetShelf.shelvedbooks) {
        Object.keys(targetShelf.shelvedbooks).forEach( id => {
          if (bookDetail.id == id) {
            status = "✅";
            this.handleClick = this.handleRemove;
          }
        })
      }
      return <li key={idx} value={bookshelf.id} onClick={this.handleClick}>
                {status}  {bookshelf.name}
             </li>
    })

    return (
      <div className="shelf-selector">
          <ul >
            {list_of_user_bookshelves}
          </ul>
      </div>
    )
  }


}

export default withRouter(AddToShelf);
