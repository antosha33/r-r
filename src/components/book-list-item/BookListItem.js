import React from 'react';
import './bookListItem.sass'

const BookListItem = ({ book }) => {
  const { title, author, price, cover } = book;
  return (
    <div className='book-list-item' >
      <div className='book-list-cover'>
        <img src={cover}></img>
      </div>
      <div className='book-list-data'>
        <a href="#" className='book-title'>
          <span>{title}</span>
        </a>
        <div className='book-author'>
          <span>{author}</span>
        </div>
        <div className='book-price'>
          <span>{price}</span>
        </div>
        <button className='btn btn-info'>Add to Cart</button>
      </div>

    </div>
  )
}

export default BookListItem;