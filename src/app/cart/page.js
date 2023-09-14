'use client'
import React from 'react'
import { subFont } from '../fonts'
import '../styles/CartPage.scss'
import { useDataProvider } from '../context/DataProvider'
import {CartItem} from '../components'

const CartPage = () => {
  const {cartData} = useDataProvider()
  const cartTotal = cartData?.reduce((total, item) => {
    return total += parseInt(item.qty)*parseInt(item.product.price)
  }, 0) || 0
  return (
    <div className='cart-page-main'>
      <div className='cart-page-container'>
        <div className='banner'>
            <div className='text-wrapper'>
              <p className='path'>Home / Cart</p>
              <h1 className={subFont.className}>Cart</h1>
              <p className='decs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
        </div>

        <div className='cart-section'>
          <div className='cart-items-wrapper'>
            {cartData && 
              cartData.map((item, ind) => 
                <div key={ind}>
                  <CartItem
                    productThumb = {item.product.thumbs[0]}
                    productName = {item.product.name}
                    qty = {item.qty}
                    productPrice = {item.product.price}
                  />
                </div>
              )
            }
          </div>
          <div className='cart-total-wrapper'>
            {'Total: ' + cartTotal + '$'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage