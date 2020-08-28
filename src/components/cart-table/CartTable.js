import React from 'react';
import './carttable.sass';
import { connect } from 'react-redux';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const showRows = () => {
    return (
      items.map((item, idx) => (
        <tr key={item.id}>
          <td>{idx + 1}</td>
          <td>{item.name}</td>
          <td>{item.count}</td>
          <td>{item.price}</td>
          <td className='table-buttons'>
            <button onClick={onIncrease} className='btn btn-outline-danger '>
              <i className='fa fa-trash-o'></i>
            </button>
            <button onClick={onDecrease} className='btn btn-outline-success'>
              <i className='fa fa-plus-circle'></i>
            </button>
            <button onClick={onDelete} className='btn btn-outline-warning'>
              <i className='fa fa-minus-circle'></i>
            </button>
          </td>
        </tr>
      ))
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

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.cartTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => {
      console.log('onIncrease')
    },
    onDecrease: () => {
      console.log('onDecrease')
    },
    onDelete: () => {
      console.log('onDelete')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);