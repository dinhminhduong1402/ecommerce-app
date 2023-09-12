'use client'
import React, { useState } from 'react'
import '../../styles/ProductsDetail.scss'
import { useDataProvider } from '@/app/context/DataProvider'
import { RelativeProducts } from '@/app/components'
import { urlForImage } from '../../../../sanity/lib/image'
// react-responsive-carousel
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const ProductsDetail = ({params}) => {
  const {products, cartTotal, setCartTotal, cartData, setCartData} = useDataProvider()
  const {slug} = params
  const [currentProduct] = products.filter((prod) => prod.slug.current === slug)

  // trạng thái số lượng
  const [qty, setQty] = useState(1)
  const handleIncrease = () => {
    setQty(prev => prev + 1)
  }
  const handleDecrease = () => {
    if (qty > 1) {
      setQty(prev => prev - 1)
    }
  }
  // xử lí giỏ hàng
  const handleSetCart = () => {
    setCartData(prev => {
      let newData = [...prev]
      const isExist = prev.find((prod) => prod.product == currentProduct)

      if (isExist) {
        for (let i = 0; i < newData.length; i++ ) {
          if (newData[i].product == currentProduct) {
            newData[i].qty = parseInt(newData[i].qty) + qty
          }
        }
      } else {
        newData.push({
          product: currentProduct,
          qty: qty
        })
      }
      localStorage?.setItem('cartData', JSON.stringify(newData))
      return newData
    })
  }
  

  return (
    <div className='products-detail-main'>
      <div className='products-detail-container'>
        
        <div className='breadscrumb'>
          <h4>Home / Products / {currentProduct?.name} </h4>
        </div>

        <div className='products-detail-wrapper'>
          <div className='products-thumb'>
            <Carousel
              showArrows={false}
              showThumbs={true}
              showIndicators={false}
              showStatus={false}
              autoPlay={false}
            >
              {currentProduct?.thumbs.map((thumb, ind) => 
                <div key={ind}>
                  <img src={urlForImage(thumb)} alt='thumbs' />
                </div>
              )}
            </Carousel>
          </div>

          <div className='products-detail'>
            <h1 className='name'>{currentProduct?.name}</h1>
            <div className='price-wrapper'>
              {currentProduct?.prev_price && 
                <span className="prev-price">{currentProduct.prev_price?.toFixed(2) + '$'}</span>
              }
              <span className="current-price">{currentProduct?.price.toFixed(2) + '$'}</span>
            </div>

            <div className='btns-wrapper'>
              <div className='qty-wrapper'>
                <button onClick={handleDecrease}>-</button>
                <span>{qty}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className='add-btn' onClick={handleSetCart}>ADD TO CART</button>
            </div>

            <div className='sub-details'>
              <p>Sku: {currentProduct?.sku}</p>
              <p>Category: {currentProduct?.catogory}</p>
            </div>
          </div>
        </div>

        <div className='description'>
          <h4>Description</h4>
          <p>{currentProduct?.decs}</p>
        </div>

        <div className='relative-products-wrapper'>
          <h4>Relative Products</h4>
          <RelativeProducts
            currentProduct={currentProduct}
          />
        </div>

      </div>
    </div>
  )
}

export default ProductsDetail