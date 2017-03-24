import React, { Component } from 'react';
import ShelfListItem from './shelf_list_item';

class AddToShelf extends Component {

  constructor(props){
    super(props);
    this.state = {bookshelf_id: 0, book_id: 0};
    this.handleCLick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bookDetail.id !== this.props.bookDetail.id){
      this.setState({book_id: nextProps.bookDetail.id})
    }
  }


  handleClick(e) {
    console.log(this.state);
    // debugger;
    // this.setState({bookshelf_id: e.target.value});
    // let shelvedbook = ({bookshelf_id: this.state.bookshelf_id, book_id })
    // this.props.handleClick(shelvedbook);
  }


  render() {
    const { bookDetail, bookshelves,
            createShelvedbook, deleteShelvedbook} = this.props;
    let user_bookshelves = Object.keys(bookshelves).map((id) => bookshelves[id]);

    let list_of_user_bookshelves = user_bookshelves.map((bookshelf, idx) => {
      let handleClick= createShelvedbook;
      let status="☑️️";
      let targetShelf = bookshelf;
      if (targetShelf.shelvedbooks) {
        Object.keys(targetShelf.shelvedbooks).forEach( id => {
          if (bookDetail.id == id) {
            status = "✅";
           handleClick = deleteShelvedbook;
          }
        })
      }
      return <option key={idx} value={bookshelf.id}>
                {status}{bookshelf.name}
             </option>
    })

    return (
      <div className="shelf-selector">
          <select onClick={this.handleClick} value={this.state.bookshelf_id}>
            <option value="0" disabled defaultValue hidden>Shelve this book!</option>
            {list_of_user_bookshelves}
          </select>
      </div>
    )
  }


}

export default AddToShelf;
