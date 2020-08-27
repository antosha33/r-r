import React, { useCallback, useEffect } from 'react';
import './bookList.sass';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import WithBookStoreService from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



const BookList = ({ books, loading, error, fetchBooks }) => {

  const getBooks = useCallback(async () => {
    fetchBooks()
  }, []);

  useEffect(() => { getBooks() }, [getBooks])

  if (loading) {
    return <Spinner></Spinner>
  } else if (error) {
    return <ErrorIndicator></ErrorIndicator>
  } else {
    return (
      <ul className='book-list'>
        {
          books.map(book => <li key={book.id}><BookListItem book={book}></BookListItem></li>)
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
}

const mapDisptachToProps = (dispatch, { service }) => {
  return {
    fetchBooks: fetchBooks(dispatch, service)
  }
}

export default compose(WithBookStoreService, connect(mapStateToProps, mapDisptachToProps))(BookList);