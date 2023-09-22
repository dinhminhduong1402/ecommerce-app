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
            <h1 className='title'>Cart Total</h1>
            <ul className='total-detail-wrapper'>
              <li>
                <span>Subtotal:</span>
                <span>{cartTotal + '$'}</span>
              </li>
              <li>
                <span>Delivery:</span>
                <span>{0}</span>
              </li>
              <li>
                <span>Discount</span>
                <span>{0}</span>
              </li>
            </ul>
            <div className='total-wrapper'>
              <span className='total-title'>Total:</span>
              <span className='total-price'>{cartTotal + '$'}</span>
            </div>
            <div className='check-out-btn-wrapper'>
              <button>CHECK OUT</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage