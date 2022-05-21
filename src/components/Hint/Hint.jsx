import React, { useRef, useEffect } from 'react'
import './Hint.scss'

const Hint = ({ closeHint, hintName }) => {
  let timerIdValue = useRef()
  useEffect(() => {
    timerIdValue = setTimeout(closeHint, 3000)
    return () => {
      clearInterval(timerIdValue.current)
    }
  }, [hintName])

  return (
    <div className='Hint'>
      <p className='hint-name'>{hintName}</p>
      <p>добавлен в корзину</p>
    </div>
  )
}

export default Hint
