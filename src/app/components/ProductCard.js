// 'use client'
import React from 'react'
import '../styles/ProductCard.scss'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'

const ProductCard = ({productThumb, productName, productCatogory, productPrice, 
productPrevPrice}) => {

  return (
    <div className='product-card-wrapper'>
      <div className="thumb">
        <Image
          src={productThumb && urlForImage(productThumb).url()}
          width={300}
          height={300}
          alt='product-thumb'
        ></Image>
      </div>

      <p className="catogory">
        {productCatogory || 'catogory'}
      </p>

      <h2 className='name'>{productName || 'Product Name'}</h2>

      <div className='price'>
        <span className='prev-price'>
          {productPrevPrice || 'pre price'}
        </span>
        <span className='current-price'>
          {productPrice || 'current price'}
        </span>
      </div>
    </div>
  )
}

export default ProductCard