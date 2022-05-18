import React from 'react'
import CartItem from '../CartItem/CartItem'
import './CartList.scss'

const CartList = ({ order, removeFromCart }) => {
  let totalPrice = order.reduce((total, current) => {
    return total + current.price.regularPrice * current.quantity
  }, 0)
  return (
    <div className='CartList'>
      <h2>Your Order:</h2>
      {order.length > 0 ? (
        <>
          <ul className='wrapper'>
            {order.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              )
            })}
          </ul>
          <div className='totalPrice'>
            <span>Total amount: </span>
            <span>{totalPrice} руб</span>
          </div>
        </>
      ) : (
        <h2 className='emptyCart'>В корзине пусто</h2>
      )}
    </div>
  )
}

export default CartList
