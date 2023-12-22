'use client'

import React, { useContext, useEffect, useState } from 'react'
import {ProductsSlider, ProductCard} from '.'
import { DataContext, useDataProvider } from '../context/DataProvider'

const RelativeProduct = ({currentProduct}) => {
  const {products} = useContext(DataContext)
  const [relativeProducts, setRelativeProducts] = useState([])

  useEffect(() => {
      setRelativeProducts(products?.filter(prod => prod.catogory == currentProduct.catogory))
    }, [currentProduct])

  return (
    <section className="relative-products">
      <div className="relative-products-container">

        <div className="products-slider">
          <ProductsSlider>
            {relativeProducts.map((prod, ind) => (
              <ProductCard
                key={ind}
                productThumb={prod.thumbs && prod.thumbs[0]}
                productName={prod.name}
                productCatogory={prod.catogory}
                productPrice={prod.price}
                productPrevPrice={prod.prev_price}
                productSlug={prod.slug.current}
              />
            ))}
          </ProductsSlider>
        </div>
      </div>
    </section>
  )
}

export default RelativeProduct
