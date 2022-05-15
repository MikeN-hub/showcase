import React, { useState, useRef } from 'react'
import { MdClose } from 'react-icons/md'

import './Modal.scss'

const Modal = ({ children, setIsModal, isModal }) => {
  const modalRef = useRef()
  const closeModal = (e) => {
    console.log(modalRef.current)
    if (e.target === modalRef.current) {
      console.log('yes')
      setIsModal(false)
    } else return
  }

  return (
    isModal && (
      <div className='Modal' ref={modalRef} onClick={closeModal}>
        <div className='container'>
          {children}
          <MdClose color='red' className='close-btn' onClick={() => console.log('closed')}/>
        </div>
      </div>
    )
  )
}

export default Modal
