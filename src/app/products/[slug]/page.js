'use client'
import React from 'react'
import '../../styles/ProductsDetail.scss'
import { useDataProvider } from '@/app/context/DataProvider'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

const ProductsDetail = ({params, searchParams}) => {
  const {products} = useDataProvider()
  const {slug} = params
  const [currentProduct] = products.filter((prod) => prod.slug.current === slug)
  
  console.log(currentProduct)

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
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className='add-btn'>ADD TO CART</button>
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
        </div>

      </div>
    </div>
  )
}

export default ProductsDetail