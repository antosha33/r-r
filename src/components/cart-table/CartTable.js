import React from 'react';
import './carttable.sass';

const CartTable = () => {
  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Book</td>
            <td>5$</td>
            <td>2</td>
            <td className='table-buttons'>
              <button className='btn btn-outline-danger '>
                <i className='fa fa-trash-o'></i>
              </button>
              <button className='btn btn-outline-success'>
                <i className='fa fa-plus-circle'></i>
              </button>
              <button className='btn btn-outline-warning'>
                <i className='fa fa-minus-circle'></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: 201$ </div>
    </div>


  )
}

export default CartTable;