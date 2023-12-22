'use client'
import React, { useContext } from 'react'
import { Pagination } from '../components'
import { DataContext, useDataProvider } from '../context/DataProvider';
import '../styles/ProductsPage.scss';
import { subFont } from '../fonts';

const ProductsPage = () => {
  const {products} = useContext(DataContext)
  
  return (
      <div className='products-page'>
        <div className='products-page-container'>
          <div className='banner'>
            <div className='text-wrapper'>
              <p className='path'>Home / Shop</p>
              <h1 className={subFont.className}>Shop</h1>
              <p className='decs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          </div>

          <div className='main-section'>
            <div className='filters-wrapper'>
              <h4>PRODUCT CATEGORIES</h4>
              <ul>
                {products.map(prod => prod.catogory).filter((ctg, ind, arr) => arr.indexOf(ctg) === ind).map((ite, i) => 
                <li key={i}>
                  <input type='checkbox' value={ite}/>
                  <h5>{ite}</h5>
                </li>
              )}
              </ul>
            </div>
            <div className="products-wrapper">
            <Pagination
              products={products}
            />
            </div>
          </div>


        </div>
      </div>
  )
}

export default ProductsPage
