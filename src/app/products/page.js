'use client'
import React from 'react'
import { Pagination } from '../components'
import { useDataProvider } from '../context/DataProvider';
import '../styles/ProductsPage.scss';

const ProductsPage = () => {
  const {products} = useDataProvider()
  
  return (
    <div className='products-page'>
      <div className='filters-wrapper'>
        <h4>filter</h4>
      </div>
      <div className="products-page-container">
      <Pagination
        products={products}
      />
      </div>
    </div>
    
  )
}

export default ProductsPage
