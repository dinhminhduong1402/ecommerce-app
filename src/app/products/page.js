'use client'
import { client } from '../../../sanity/lib/client'
import React, { useEffect, useState } from 'react'
import { ProductCard, ProductsSlider, Pagination } from '../components'
import '../styles/ProductsPage.scss';


const getProducts = async () => {
  const query = `*[_type == 'products']`
  const products = client.fetch(query)
  return products
}

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className='products-page'>
      <div className="products-page-container">
      <Pagination
        products={products}
      />
      </div>
    </div>
    
  )
}

export default ProductsPage
