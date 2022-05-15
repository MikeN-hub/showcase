import React, { useState, useEffect } from 'react'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import { BsCart } from 'react-icons/bs'

import './Shop.scss'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const Shop = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [order, setOrder] = useState([])
  const [isShowCart, setIsShowCart] = useState(false)

  const addToCart = (product) => {
    const productIndex = order.findIndex((item) => item.id === product.id)
    const newProduct = {
      ...product,
      quantity: 1,
    }

    setOrder([newProduct, ...order])
  }

  const showCartHandle = () => {
    setIsShowCart(!isShowCart)
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      const data = await res.json()
      setProducts(data.shop)
    }
    getProducts()
  }, [])

  return (
    <div className='Shop'>
      <ProductList products={products} addToCart={addToCart} />
      <BsCart
        className='cart-icon'
        color='green'
        size={50}
        onClick={showCartHandle}
      />
      {isShowCart && <Cart showCartHandle={showCartHandle} />}
    </div>
  )
}

export default Shop
