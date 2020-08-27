const bookLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
};

const bookRequasted = () => {
  return {
    type:  'BOOKS_REQUASTED',
  }
}

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error,
  }
}

export {
  bookLoaded,
  bookRequasted,
  booksError
}