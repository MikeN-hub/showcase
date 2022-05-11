import React from 'react'
import Product from '../Product/Product'
import './ProductList.scss'

const ProductList = ({ products }) => {
  return (
    <div className='ProductList'>
      {products.map((product) => {
        return <Product key={product.mainId} {...product} />
      })}
    </div>
  )
}

export default ProductList
