import React, { Component } from 'react';
import ShelfListItem from './shelf_list_item';

class AddToShelf extends Component {

  constructor(props){
    super(props);
    this.state = {bookshelf_id: 0, book_id: 0};
    // this.handleClick = this.handleClick.bind(this);
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
      this.props.deleteShelvedbook(this.state);
    })
  }
  //
  // handleClick(e) {
  //   console.log("in handle click");
  //   e.stopPropagation();
  //   this.setState({bookshelf_id: e.target.value}, () => {
  //     // let shelvedbook = ({bookshelf_id: state.bookshelf_id, book_id: state.book_id })
  //     this.shelfAction(this.state);
  //   });
  // }


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

export default AddToShelf;
