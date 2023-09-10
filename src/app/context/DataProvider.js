'use client'

import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { client } from '../../../sanity/lib/client'

const DataContext = createContext()

const useDataProvider = () => useContext(DataContext)

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

  return (
    <DataContext.Provider value={{
      products
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider, useDataProvider}