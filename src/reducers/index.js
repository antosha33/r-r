import bookItems from './book-items';
import cartItems from './cart-items';

const reducer = (state, action) => {
  return {
    bookList: bookItems(state, action),
    shoppingCart: cartItems(state, action)
  }
}

export default reducer;