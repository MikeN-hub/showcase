import React from 'react'
import Product from '../Product/Product'
import './ProductList.scss'

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className='ProductList'>
      {products.map((product) => {
        return (
          <Product
            key={product.mainId}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )
      })}
    </div>
  )
}

export default ProductList
