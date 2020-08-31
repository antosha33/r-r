import React from 'react';
import './carttable.sass';
import { connect } from 'react-redux';
import { onDecrease, onDelete, onAddedToCart } from '../../actions';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const showRows = () => {
    return (
      items.map((item, idx) => {
        const { id } = item;
        return (
          <tr key={item.id}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td className='table-buttons'>
              <button onClick={() => onIncrease(id)} className='btn btn-outline-danger '>
                <i className='fa fa-plus-circle'></i>
              </button>
              <button onClick={() => onDecrease(id)} className='btn btn-outline-success'>
                <i className='fa fa-minus-circle'></i>
              </button>
              <button onClick={() => onDelete(id)} className='btn btn-outline-warning'>
                <i className='fa fa-trash-o'></i>
              </button>
            </td>
          </tr >
        )
      }

      )
    )
  }


  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showRows()}
        </tbody>
      </table>
      <div className="total">Total: {total} </div>
    </div>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems, cartTotal } }) => {
  return {
    items: cartItems,
    total: cartTotal
  }
}

const mapDispatchToProps = {

  onIncrease: onAddedToCart,
  onDecrease: onDecrease,
  onDelete: onDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);