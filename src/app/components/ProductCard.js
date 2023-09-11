// 'use client'
import React from 'react'
import '../styles/ProductCard.scss'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import { PiCurrencyDollarThin } from "react-icons/pi"

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
      <Link
        className="links"
        href={`/products/${productSlug}`}
      >
        <div className="thumb">
          <Image
            src={productThumb && urlForImage(productThumb).url()}
            width={250}
            height={250}
            alt="product-thumb"
            layout="responsive"
          ></Image>
        </div>

        <p className="catogory">{productCatogory || 'catogory'}</p>

        <h2 className="name">{productName || 'Product Name'}</h2>

        <div className="price">
          {productPrevPrice && 
          <span className="prev-price">{productPrevPrice.toFixed(2) + '$'}</span>
          }
          <span className="current-price">{productPrice?.toFixed(2) + '$'}</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
