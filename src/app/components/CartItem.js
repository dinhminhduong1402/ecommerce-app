import React, { useContext } from 'react'
import '../styles/CartItem.scss'
import Image from 'next/image'
import { DataContext, useDataProvider } from '../context/DataProvider'
import { urlForImage } from '../../../sanity/lib/image'

const CartItem = ({productThumb, productName, qty, productPrice}) => {
  const {products, cartData, setCartData} = useContext(DataContext)
  const [currentCartItem] = cartData?.filter(item => item.product.name === productName)

  const handleIncrease = () => {
    setCartData(prev => {
      const newCartData = [...prev]
      const currentItemIndex = newCartData.indexOf(currentCartItem)
      newCartData[currentItemIndex].qty += 1

      if (typeof window !== 'undefined') {
        localStorage.setItem('cartData', JSON.stringify(newCartData))
      }

      return newCartData
      
    })
    
  }
  const handleDecrease = () => {
    setCartData(prev => {
      const newCartData = [...prev]
      const currentItemIndex = newCartData.indexOf(currentCartItem)
      if (newCartData[currentItemIndex].qty > 1) {
        newCartData[currentItemIndex].qty -= 1
        if (typeof window !== 'undefined') {
          localStorage.setItem('cartData', JSON.stringify(newCartData))
        }
      }
      return newCartData
    })
    
  }
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
    <div className='cart-item-wrapper'>
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

        <div className='sub-info'>

          <div className='qty-wrapper'>
            <button onClick={handleDecrease}>-</button>
            <span>{qty}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <span className='price'>{'x ' + productPrice.toFixed(2) + '$'}</span>
        </div>

      </div>
      <div className='item-right'>
        <button onClick={handleDeleteItem}>x</button>
      </div>
    </div>
  )
}

export default CartItem