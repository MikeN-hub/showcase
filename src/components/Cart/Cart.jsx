import React from 'react'
import { BsCart } from 'react-icons/bs'
import Modal from '../Modal/Modal'
import { MdClose } from 'react-icons/md'
import './Cart.scss'

const Cart = ({ isModal, setIsModal }) => {
  const clickHandle = () => {
    setIsModal(true)
  }
  return (
    <div className='Cart' onClick={clickHandle}>
      <div className='cart-image'>
        <BsCart size={40} color={'green'} />
      </div>
      <span>eee</span>
      <Modal setIsModal={setIsModal} isModal={isModal}>
        <h2>Hello from Modal!</h2>
        <MdClose
          className='close-btn'
          color='red'
          onClick={() => setIsModal(false)}
        />
      </Modal>
    </div>
  )
}

export default Cart
