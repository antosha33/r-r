import React from 'react';
import './shopheader.sass';

const ShopHeader = ({ numItems, total }) => {
  return <header className='shop-header row'>
     <a className='logo text-dark' href='#'>ReStore</a>    
     <a>
       <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} items(${total})
     </a>
    </header>
}

export default ShopHeader;