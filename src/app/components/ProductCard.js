'use client'
import React from 'react'
import '../styles/ProductCard.scss'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import { BsCart2, BsHeart } from 'react-icons/bs'
import { useDataProvider } from '../context/DataProvider'
// toast
import { toast } from 'react-toastify'

const ProductCard = ({
  productThumb,
  productName,
  productCatogory,
  productPrice,
  productPrevPrice,
  productSlug,
}) => {
  const {products, cartData, setCartData} = useDataProvider()
  
  const currentProduct = products.filter(prod => prod.name == productName)[0]
  const handleSetCart = () => {
    setCartData(prev => {
      let newData = [...prev]
      const isExist = prev.find((prod) => prod.product == currentProduct)

      if (isExist) {
        for (let i = 0; i < newData.length; i++ ) {
          if (newData[i].product == currentProduct) {
            newData[i].qty = parseInt(newData[i].qty) + 1
          }
        }
      } else {
        newData.push({
          product: currentProduct,
          qty: 1
        })
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartData', JSON.stringify(newData))
      }
      
      toast('Your product is added to cart!', { type: 'success'})
      
      return newData
    })
  }
  
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
          <span onClick={handleSetCart}>
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
