'use client'

import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import {ProductsSlider, ProductCard} from '.'

const getFeaturedProducts = async () => {
  const query = `*[_type == "products"] | order(stock desc)`
  const data = await client.fetch(query)
  return data
}

const FeaturedProduct = () => {
  const [products, getProducts] = useState([])

  useEffect(() => {
    getFeaturedProducts().then((data) =>{
      getProducts(data)
    })
  }, [])

  return (
    <section className="best-seller-products">
      <div className="best-seller-products-container">

        <div className="section-title">
          <h2>Featured products</h2>
          <span>View all products</span>
        </div>

        <div className="products-slider">
          <ProductsSlider>
            {products.map((prod, ind) => (
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

export default FeaturedProduct
