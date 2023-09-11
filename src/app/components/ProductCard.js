// 'use client'
import React from 'react'
import '../styles/ProductCard.scss'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import { BsCart2, BsHeart } from 'react-icons/bs'

const ProductCard = ({
  productThumb,
  productName,
  productCatogory,
  productPrice,
  productPrevPrice,
  productSlug,
}) => {
  return (
    <div className="product-card-wrapper">
      <div className="thumb">
        {productPrevPrice && (
          <div className="sell-percent">
            <span>{((1 - productPrice / productPrevPrice) * 100).toFixed(0) + '%'}</span>
          </div>
        )}

        <div className="icons">
          <span>
            <BsHeart />
          </span>
          <span>
            <BsCart2 />
          </span>
        </div>
        
        <Link className="links" href={`/products/${productSlug}`}>
          <Image
            src={productThumb && urlForImage(productThumb).url()}
            width={250}
            height={250}
            alt="product-thumb"
            layout="responsive"
          ></Image>
        </Link>
      </div>

      <p className="catogory">{productCatogory || 'catogory'}</p>

      <h2 className="name">{productName || 'Product Name'}</h2>

      <div className="price">
        {productPrevPrice && (
          <span className="prev-price">{productPrevPrice.toFixed(2) + '$'}</span>
        )}
        <span className="current-price">{productPrice?.toFixed(2) + '$'}</span>
      </div>
    </div>
  )
}

export default ProductCard
