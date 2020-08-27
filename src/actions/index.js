const bookLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};

const bookRequasted = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
}

const fetchBooks = (dispatch, service) => async () => {
  try {
    dispatch(bookRequasted());
    const books = await service.getBooks();
    dispatch(bookLoaded(books));
  } catch (e) {
    dispatch(booksError(e));
  }
}

export {
  fetchBooks,
}