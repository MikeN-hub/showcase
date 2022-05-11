import React from 'react'
import './Product.scss'

const Product = (props) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: image,
    price,
  } = props

  return (
    <div className='Product'>
      <div className='image'>
        <img src={image[0].full_background} alt={name} width={250} />
      </div>
      <div className='title'>
        <p className='name'>{name}</p>
        <p className='description'>{description}</p>
      </div>
      <div className='price'>
        <button>Купить</button>
        <span>{price.regularPrice} руб.</span>
      </div>
    </div>
  )
}

export default Product
