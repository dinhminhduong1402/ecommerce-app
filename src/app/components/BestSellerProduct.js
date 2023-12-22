'use client'

import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import {ProductsSlider, ProductCard} from '../components'

const getBestSellerProducts = async () => {
  const query = `*[_type == "products"] | order(sold desc)`
  const data = await client.fetch(query)
  return data
}

const BestSellerProduct = () => {
  const [bsProducts, getBsProducts] = useState([])

  useEffect(() => {
    getBestSellerProducts().then((data) =>{
       getBsProducts(data)
    })
  }, [])

  return (
    <section className="best-seller-products">
      <div className="best-seller-products-container">

        <div className="section-title">
          <h2>Best seller products</h2>
          <span>View all products</span>
        </div>

        <div className="products-slider">
          <ProductsSlider>
            {bsProducts.map((prod, ind) => (
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

export default BestSellerProduct
