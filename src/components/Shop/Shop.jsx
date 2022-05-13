import React, { useState, useEffect } from 'react'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import './Shop.scss'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const Shop = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [isModal, setIsModal] = useState(false)

  const addToCart = (product) => {
    setQuantity(prev => prev + 1)
    setCart([product, ...cart])
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
      <ProductList products={products} addToCart={addToCart}/>
      <Cart isModal={isModal} setIsModal={setIsModal}/>
    </div>
  )
}

export default Shop
