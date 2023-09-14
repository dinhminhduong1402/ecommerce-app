'use client'

import React, { useRef, useState } from 'react'
import ProductCard from './ProductCard'
import '../styles/Pagination.scss'

const Pagination = ({products}) => {
  const itemPerPage = 9
  const totalPage = Math.ceil(products.length / itemPerPage)

  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1)*itemPerPage
  const endIndex = startIndex + itemPerPage

  const currentProducts = products.slice(startIndex, endIndex)

  const productWrapperRef = useRef(null)
  const handleSetCurrentPage = (pageNumber) => {
    productWrapperRef.current.scrollIntoView({ behavior: "smooth" })
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className='products-wrapper' ref={productWrapperRef}>
        <ul>
        {currentProducts.map((prod, ind) => 
        <li key={ind}>
          <ProductCard
            productThumb={prod.thumbs && prod.thumbs[0]}
            productName={prod.name}
            productCatogory={prod.catogory}
            productPrice={prod.price}
            productPrevPrice={prod.prev_price}
            productSlug={prod.slug.current}
          />
        </li>
        )}

        </ul>
      </div>

      <div className='pagination'>
        <button className='prev-btn'>Prev</button>
        <div className='page-number'>
          {Array.from({length: totalPage}, (_,ind) => 
            <button 
              key={ind}
              onClick={() => handleSetCurrentPage(ind + 1)}
              className={currentPage == ind+1 ?'active' : ''}
            >
              {ind+1}
            </button>
          )}
        </div>
        <button className='next-btn'>Next</button>
      </div>
    </>
  )
}

export default Pagination