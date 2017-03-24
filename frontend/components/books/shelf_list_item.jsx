
import React from 'react';

class ShelfListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = { sym: this.props.sym};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.sym !== newProps.sym ) {
      this.setState({sym: newProps.sym});
    }
  }

  handleClick() {
    if (this.state.sym !== "💤" ) {
      this.setState({sym: "💤" }, () =>
      this.props.handleClick(this.props.shelf.id, this.props.bookId));
    }
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <div>{this.state.status}</div>
        {this.props.shelf.name}
      </div>
    );
  }
}

export default ShelfListItem;
