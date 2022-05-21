import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import { IoIosClose } from 'react-icons/io'

import './CartItem.scss'

const CartItem = ({ product, removeFromCart, plusQuantity, minusQuantity }) => {
  return (
    <li className='CartItem'>
      <div className='product-name'>{product.name}</div>
      <div className='product-info'>
        <div className='quantity col'>
          <span>
            <AiOutlineMinus size={20} color='red' onClick={() => minusQuantity(product.id)}/>
          </span>
          <span>{product.quantity} шт</span>
          <span>
            <AiOutlinePlus size={20} color='green' onClick={() => plusQuantity(product.id)}/>
          </span>
        </div>
        <div className='price col'>
          <span><IoIosClose /></span>
          <span>{product.price.regularPrice} руб</span>
        </div>

        <div className='sum col'>
          = {product.price.regularPrice * product.quantity} руб
        </div>
      </div>
      <div className='removeItem-btn' onClick={() => removeFromCart(product.id)}>
        <MdDeleteForever color='orange' />
      </div>
    </li>
  )
}

export default CartItem
