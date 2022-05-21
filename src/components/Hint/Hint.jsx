import React, { useEffect } from 'react'
import './Hint.scss'

const Hint = ({ closeHint, hintName }) => {
  useEffect(() => {
    const timerId = setTimeout(closeHint, 3000)
    return () => {
      clearInterval(timerId)
    }
  // eslint-disable-next-line
  }, [hintName])

  return (
    <div className='Hint'>
      <p className='hint-name'>{hintName}</p>
      <p>добавлен в корзину</p>
    </div>
  )
}

export default Hint
