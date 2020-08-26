import React, { useCallback, useEffect } from 'react';
import './bookList.css';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bookLoaded } from '../../actions';

const BookList = ({ books }) => {

  return (
    <ul>
      {
        books.map(book => <li><BookListItem book={book}></BookListItem></li>)
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    bookLoaded: () => dispatch(bookLoaded()),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(BookList);