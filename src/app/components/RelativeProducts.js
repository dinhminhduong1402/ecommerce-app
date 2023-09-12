'use client'

import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import {ProductsSlider, ProductCard} from '.'

const getRelativeProducts = async () => {
  const query = `*[_type == "products"]`
  const data = await client.fetch(query)
  return data
}

const RelativeProduct = ({currentProduct}) => {
  const [products, getProducts] = useState([])

  useEffect(() => {
    getRelativeProducts().then((data) =>{
      getProducts(data?.filter(prod => prod.catogory == currentProduct.catogory))
       console.log(data)
    })
  }, [])

  return (
    <section className="relative-products">
      <div className="relative-products-container">

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

export default RelativeProduct
