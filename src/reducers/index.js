const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
  ],
  cartTotal: '110$'
}

const createItem = (book, item = {}) => {

  const { count = 0, price = 0 } = item;

  return {
    id: book.id,
    name: book.title,
    count: count + 1,
    price: price + book.price
  }
}

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: state.books,
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADD_TO_CART':
      const id = action.payload;
      const book = state.books.find((item) => item.id === id);
      const itemIdx = state.cartItems.findIndex((item) => item.id === id);

      const newItem = createItem(book, state.cartItems[itemIdx]);

      if (itemIdx > -1) {
        
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIdx),
            newItem,
            ...state.cartItems.slice(itemIdx + 1)
          ]
        }
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem,
        ]
      }

    default:
      return state;
  }
}

export default reducer;