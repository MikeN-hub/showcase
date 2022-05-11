import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='wrapper'>
        <span>done by Mike in {new Date().getFullYear()}</span>
        <span>@All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
