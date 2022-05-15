import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md'

import './Cart.scss'

const Cart = ({ showCartHandle }) => {
  const containerElemRef = useRef()
  const clickHandle = (e) => {
    if(e.target !== containerElemRef.current) {
      showCartHandle()
    }
  }
  return (
    <div className='Cart' onClick={clickHandle}>
      <div className='container' ref={containerElemRef}>
        Cart
        <MdClose className='close-btn' onClick={showCartHandle} />
      </div>
    </div>
  )
}

export default Cart
