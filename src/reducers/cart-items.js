const createItem = (book, item = {}, quantity) => {
  const { count = 0, price = 0 } = item;
  return {
    id: book.id,
    name: book.title,
    count: count + quantity,
    price: price + quantity * book.price
  }
}


const updateCartBooks = (state, id, quantity) => {

  if (state === undefined) {
    return {
      cartItems: [],
      catTotal: 0
    }
  }

  const { bookList: { books }, shoppingCart: { cartItems } } = state;
  const book = books.find((item) => item.id === id);
  const itemIdx = cartItems.findIndex((item) => item.id === id);
  const newItem = createItem(book, cartItems[itemIdx], quantity);

  if (itemIdx > -1) {

    if (newItem.count === 0) {
      return {
        cartTotal: 0,
        cartItems: [
          ...cartItems.slice(0, itemIdx),
          ...cartItems.slice(itemIdx + 1)
        ]
      }
    }
    return {
      cartTotal: 0,
      cartItems: [
        ...cartItems.slice(0, itemIdx),
        newItem,
        ...cartItems.slice(itemIdx + 1)
      ]
    }
  }

  return {
    cartTotal: 0,
    cartItems: [
      ...cartItems,
      newItem,
    ]
  }
}

const cartItems = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [
      ],
      cartTotal: '110$'
    }
  }

  switch (action.type) {

    case 'BOOK_ADD_TO_CART':

      return updateCartBooks(state, action.payload, 1);


    case 'BOOK_DELETE_FROM_CART':

      return updateCartBooks(state, action.payload, -1);

    case 'ALL_BOOK_DELETE_FROM_CART':
      const countOfDelete = state.shoppingCart.cartItems.find((item) => item.id === action.payload).count;
      return updateCartBooks(state, action.payload, -countOfDelete);

    default:
      return state.shoppingCart;
  }
}

export default cartItems;