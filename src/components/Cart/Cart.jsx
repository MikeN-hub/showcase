import React from 'react'
import { BsCart } from 'react-icons/bs'
import './Cart.scss'

const Cart = () => {
  return (
    <div className='Cart'>
      <div className='cart-image'>
        <BsCart size={40} color={'green'}/>
      </div>
      <span>eee</span>
    </div>
  )
}

export default Cart
