import React, { useCallback, useEffect } from 'react';
import './bookList.sass';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bookLoaded, bookRequasted, booksError } from '../../actions';
import WithBookStoreService from '../hoc';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



const BookList = ({ books, service, bookLoaded, loading, error, bookRequasted, booksError }) => {


  const getBooks = useCallback(async () => {
    try {
      bookRequasted();
      const books = await service.getBooks();
      bookLoaded(books);
    } catch (e) {
      booksError(e)
      console.log()
    }

  }, [bookLoaded, service]);

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

const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({ bookLoaded, bookRequasted, booksError }, dispatch)
}

export default compose(connect(mapStateToProps, mapDisptachToProps), WithBookStoreService)(BookList);