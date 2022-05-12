import React from 'react'
import Product from '../Product/Product'
import './ProductList.scss'

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='ProductList'>
      {products.map((product) => {
        return <Product key={product.mainId} product={product} addToCart={addToCart} />
      })}
    </div>
  )
}

export default ProductList
