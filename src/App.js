import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'
import './App.scss'

function App() {
  const [isModal, setIsModal] = useState(true);

  return (
    <div className={`${isModal ? 'blured App' : 'App'}`}>
      <Header />
      <Shop />
      <Footer />
    </div>
  )
}

export default App
