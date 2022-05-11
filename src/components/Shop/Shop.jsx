import React, { useState, useEffect } from 'react'
import ProductList from '../ProductList/ProductList'
import './Shop.scss'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const Shop = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  return <div className='Shop'><ProductList products={products}/></div>
}

export default Shop
