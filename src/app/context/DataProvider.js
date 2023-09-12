'use client'

import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { client } from '../../../sanity/lib/client'

// context
const DataContext = createContext()
const useDataProvider = () => useContext(DataContext)

// provider
const DataProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const productsQuery = `*[_type == 'products']`
  
  useEffect(() => {
    client.fetch(productsQuery)
      .then(result => {
        setProducts(result)
      })
      .catch(() => {
        console.log('lỗi truy vấn dữ liệu')
      })
  }, [])

  // dữ liệu giỏ hàng
  const iniCartData = () => {
    const localCartData = JSON.parse(localStorage?.getItem('cartData'))
    return localCartData || []
  }
  const [cartData, setCartData] = useState(iniCartData())
  
  return (
    <DataContext.Provider value={{
      products,
      cartData,
      setCartData,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider, useDataProvider}