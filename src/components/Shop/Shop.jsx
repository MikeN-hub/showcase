import React, { useState, useEffect } from 'react'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import Hint from '../Hint/Hint'
import { BsCart } from 'react-icons/bs'
import Loader from '../Loader/Loader'

import './Shop.scss'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const Shop = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isShowCart, setIsShowCart] = useState(false)
  // const [isShowHint, setisShowHint] = useState(false)
  const [hintName, setHintName] = useState('');

  const addToCart = (product) => {
    const productIndex = order.findIndex((item) => item.id === product.id)
    if (productIndex === -1) {
      const newProduct = {
        ...product,
        quantity: 1,
      }
      setOrder([newProduct, ...order])
    } else {
      const newOrder = order.map((item, index) => {
        if (index === productIndex) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setOrder(newOrder)
    }
    setHintName(product.name)
  }

  const removeFromCart = (id) => {
    const newOrder = order.filter((item) => item.id !== id)
    setOrder(newOrder)
  }

  const plusQuantity = (id) => {
    const newOrder = order.map((product) => {
      if (product.id === id)
        return { ...product, quantity: product.quantity + 1 }
      else return product
    })
    setOrder(newOrder)
  }

  const minusQuantity = (id) => {
    const newOrder = order.map((product) => {
      if (product.id === id)
        if (product.quantity === 1) return product
        else return { ...product, quantity: product.quantity - 1 }
      else return product
    })
    setOrder(newOrder)
  }

  const closeHint = () => {
    setHintName('')
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
      setIsLoading(false)
    }
    getProducts()
  }, [])

  return (
    <div className='Shop'>
      {isLoading && <Loader />}
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <div className='cart-icon' onClick={() => setIsShowCart(true)}>
        <BsCart className='cart-icon' color='green' size={50} />
        <span className='cart-num'>{order.length}</span>
      </div>

      {isShowCart && (
        <Cart
          setIsShowCart={setIsShowCart}
          order={order}
          setOrder={setOrder}
          removeFromCart={removeFromCart}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
        />
      )}
      {hintName && <Hint closeHint={closeHint} hintName={hintName}/>}
    </div>
  )
}

export default Shop
