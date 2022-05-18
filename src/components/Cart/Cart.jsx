import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md'
import CartList from '../CartList/CartList'

import './Cart.scss'

const Cart = ({ setIsShowCart, order, setOrder, removeFromCart }) => {
  const containerElemRef = useRef()
  const clickHandle = (e) => {
    console.log(containerElemRef.current)
    console.log(e.target)
    if (e.target === containerElemRef.current) {
      return
    } else setIsShowCart(false)
  }
  return (
    <div className='Cart'>
      <div className='container' ref={containerElemRef}>
        <CartList order={order} setOrder={setOrder} removeFromCart={removeFromCart}/>
        <MdClose
          className='close-btn'
          color='orange'
          size='1.5rem'
          onClick={() => setIsShowCart(false)}
        />
      </div>
    </div>
  )
}

export default Cart
