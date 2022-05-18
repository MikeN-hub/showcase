import React from 'react'
import { MdClose } from 'react-icons/md'

import './CartItem.scss'

const CartItem = ({ product, removeFromCart }) => {
  return (
    <li className='CartItem'>
      <span className='product-name'>{product.name}</span>
      <span>
        {product.quantity} x {product.price.regularPrice} ={' '}
        {product.price.regularPrice * product.quantity}
      </span>
      <MdClose onClick={() => removeFromCart(product.id)} />
    </li>
  )
}

export default CartItem
