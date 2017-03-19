import { RECEIVE_BOOK } from '../actions/book_actions';
import { merge } from 'lodash';


const defaultBook = {
  title: "",
  author: "",
  description: "",
  cover_url: "",
  avg_rating: 2.5,
  pages: 0,
  publish_date: 2000,
  publisher: "",
  isbn: "",
  language: "en",
  buy_url: ""
}

export default (state = defaultBook, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK:
      return merge({}, action.book);
    default:
      return state;
  }
}
