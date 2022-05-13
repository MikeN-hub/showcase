import React, { useState, useRef } from 'react'
import './Modal.scss'

const Modal = ({ children, setIsModal, isModal }) => {
  const modalRef = useRef()
  console.log(modalRef.current)
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setIsModal(false)
    } else return
  }

  return (
    isModal && (
      <div className='Modal' ref={modalRef} onClick={closeModal}>
        <div className='container'>{children}</div>
      </div>
    )
  )
}

export default Modal
