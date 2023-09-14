'use client'
import React, { useState } from 'react'
import '../styles/Header.scss'
// icons
import { CiSearch, CiUser, CiShoppingCart,  } from 'react-icons/ci'
// images
import Image from 'next/image'
import logo from '../asset/logo.png'
import Link from 'next/link'
import { useDataProvider } from '../context/DataProvider'
import {CartModal} from '../components'

const Header = () => {
  const {cartData} = useDataProvider()

  const cartTotal = cartData.reduce((total, item) => {
    return total += parseInt(item.qty)
  }, 0) || 0

  const [openCartModal, setOpenCartModal] = useState(false)
  const handleOpenCartModal = () => {
    setOpenCartModal(true)
  }
  const handleCloseCartModal = () => {
    setOpenCartModal(false)
  }

  return (
    <div className='header'>
      <div className='header-container'>

        <div className='left'>
          <Link href={'/'}>
            <Image 
            className='logo'
            src={logo}
            alt='logo'
            width={168}
            height={40}
            />
          </Link>
        </div>

        <div className='center'>
          <Link className='links' href={'/'}>Home</Link>
          <Link className='links' href={'/products'}>Shop</Link>
          <Link className='links' href={'/'}>News</Link>
          <Link className='links' href={'#footer'}>Contact</Link>
        </div>
        
        <div className='search-box'>
          <CiSearch className='search-icon'/>
          <input type="text" placeholder='Search' />
        </div>

        <div className='right'>
          <Link href={'/'}>
            <CiUser/>
          </Link>

          <Link className='cart-btn' href={'/cart'} onMouseEnter={handleOpenCartModal}>
            <span 
              className='cart-qty' 
            >
              {cartTotal}
            </span>
            <CiShoppingCart/>
          </Link>

          { openCartModal &&
            <div className='cart-modal' onMouseLeave={handleCloseCartModal}>
            <CartModal/>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Header