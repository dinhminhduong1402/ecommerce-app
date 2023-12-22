import React, { useContext } from 'react'
import { DataContext, useDataProvider } from '../context/DataProvider'
import { urlForImage } from '../../../sanity/lib/image'
import '../styles/CartModalItem.scss'
import Image from 'next/image'

const CartModalItem = ({productThumb, productName, qty, productPrice}) => {
  const {setCartData} = useContext(DataContext)

  const handleDeleteItem = () => {
    setCartData(prev => {
      const newData = prev.filter((item) => 
        item.product.name !== productName
      )
        
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartData', JSON.stringify(newData))
      }

      return newData
    })
  }
  
  return (
    <div className='cart-modal-item-wrapper'>
      <div className='item-left'>
        <Image
          src={urlForImage(productThumb).url()}
          width={200}
          height={200}
          alt='thumb'
          layout='responsive'
        />
      </div>
      <div className='item-center'>
        <h3>{productName || 'product name'}</h3>
        <p>{qty + ' x ' + productPrice.toFixed(2) + '$'}</p>
      </div>
      <div className='item-right'>
        <button onClick={handleDeleteItem}>x</button>
      </div>
    </div>
  )
}

export default CartModalItem