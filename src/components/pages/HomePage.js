import React from 'react';
import BookList from '../book-list'
import CartTable from '../cart-table';


const HomePage = () => {
  return(
    <>
    <BookList></BookList>
    <CartTable></CartTable>
  </>
  )
}

export default HomePage;