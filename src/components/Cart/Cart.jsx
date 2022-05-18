import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md'
import CartList from '../CartList/CartList'

import './Cart.scss'

const Cart = ({
  setIsShowCart,
  order,
  setOrder,
  removeFromCart,
  plusQuantity,
  minusQuantity
}) => {
  const containerElemRef = useRef()
  const clickHandle = (e) => {
    if (e.target !== containerElemRef.current) {
      return
    } else setIsShowCart(false)
  }
  return (
    <div className='Cart' ref={containerElemRef} onClick={clickHandle}>
      <div className='container'>
        <CartList
          order={order}
          setOrder={setOrder}
          removeFromCart={removeFromCart}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
        />
        <MdClose
          className='close-btn'
          color='white'
          size='1.5rem'
          onClick={() => setIsShowCart(false)}
        />
      </div>
    </div>
  )
}

export default Cart
