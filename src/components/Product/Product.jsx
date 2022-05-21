import React from 'react'
import './Product.scss'

const Product = ({ product, addToCart }) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: image,
    price,
  } = product

  const buyHandler = () => {
    addToCart({ id, name, price })
  }

  return (
    <div className='Product'>
      <div className='image'>
        <img src={image[0].full_background} alt={name} width={246} />
      </div>
      <div className='title'>
        <p className='name'>{name}</p>
        <p className='description'>{description}</p>
      </div>
      <div className='price'>
        <button onClick={buyHandler}>Купить</button>
        <span>{price.regularPrice} руб.</span>
      </div>
    </div>
  )
}

export default Product
