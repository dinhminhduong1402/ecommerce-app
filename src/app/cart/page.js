'use client'
import React from 'react'
import { subFont } from '../fonts'
import '../styles/CartPage.scss'
import { useDataProvider } from '../context/DataProvider'

const CartPage = () => {
  const {cartData} = useDataProvider()
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
          {cartData && 
            cartData.map((item, ind) => 
              <div key={ind}>
                {item.product.name + ' --- ' + item.qty}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CartPage