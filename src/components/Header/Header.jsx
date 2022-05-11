import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='Header'>
      <div className='wrapper'>
        <div className='logo'>
          <span>Fortnite Showcase</span>
        </div>
        <nav>
          <div className='repo'>
            <span>Repo</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
