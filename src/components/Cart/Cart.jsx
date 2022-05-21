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
  minusQuantity,
}) => {
  const containerElemRef = useRef()
  const clickHandle = (e) => {
    if (e.target !== containerElemRef.current) {
      return
    } else setIsShowCart(false)
  }

 const submitHandler = (e) => {
   e.preventDefault()
   console.log('the order has been sent')
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
        { order.length > 0 &&
          <form className='checkout' onSubmit={submitHandler}>
            <button type='submit' className='purchase-btn'>
              Оформить заказ
            </button>
          </form>
        }
      </div>
    </div>
  )
}

export default Cart
