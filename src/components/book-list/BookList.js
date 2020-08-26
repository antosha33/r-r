import React, { useCallback, useEffect } from 'react';
import './bookList.sass';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bookLoaded } from '../../actions';
import WithBookStoreService from '../hoc';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';



const BookList = ({ books, service, bookLoaded }) => {


  const getBooks = useCallback(() => bookLoaded(service.getBooks()), [bookLoaded, service]);

  useEffect(() => { getBooks() }, [getBooks])

  return (
    <ul className='book-list'>
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
  return bindActionCreators({ bookLoaded }, dispatch)
}

export default compose(connect(mapStateToProps, mapDisptachToProps), WithBookStoreService)(BookList);