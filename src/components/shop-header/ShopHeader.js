import React from 'react';
import './shopheader.sass';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return <header className='shop-header row'>
    <Link to='/'><div className='logo text-dark' >ReStore</div> </Link>

    <Link to='cart/'>
      <i className="cart-icon fa fa-shopping-cart"></i>
      {numItems} items(${total})
     </Link>
  </header>
}

export default ShopHeader;