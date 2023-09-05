'use client'
import { client } from '../../../sanity/lib/client'
import React, { useEffect, useState } from 'react'
import { ProductCard, ProductsSlider } from '../components'


const getProducts = async () => {
  const query = `*[_type == 'products']`
  const products = client.fetch(query)
  return products
}

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className='carsousel-wrapper'
      style={{
        // width: '600px'
      }}
    >
      <ProductsSlider>
        {products.map((prod, ind) => (
          <ProductCard
            key={ind}
            productThumb={prod.thumbs && prod.thumbs[0]}
            productName={prod.name}
            productCatogory={prod.catogory}
            productPrice={prod.price}
            productPrevPrice={prod.prev_price}
          />
        ))}
      </ProductsSlider>
    </div>
    
  )
}

export default ProductsPage
