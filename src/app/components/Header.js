'use client'
import React, { useContext, useEffect, useState, useRef } from 'react'
import '../styles/Header.scss'
// icons
import { CiSearch, CiUser, CiShoppingCart } from 'react-icons/ci'
// images
import Image from 'next/image'
import logo from '../asset/logo.png'
import Link from 'next/link'
import { DataContext } from '../context/DataProvider'
import { CartModal } from '../components'

const Header = () => {
  const { cartData } = useContext(DataContext)
  const [isOpenCartModal, setIsOpenCartModal] = useState(false)

  // handle open/close modal cart
  const CartModalElement = useRef()
  const handleCartModal = () => {
    if (isOpenCartModal) {
      CartModalElement.current.style.display = 'block'
    } else {
      CartModalElement.current.style.display = 'none'
    }
  }
  useEffect(() => {
    handleCartModal()
  }, [isOpenCartModal])

  // calculate cartTotal
  const cartTotal =
    cartData.reduce((total, item) => {
      return (total += parseInt(item.qty))
    }, 0) || 0

  return (
    <div className="header">
      <div className="header-container">
        <div className="left">
          <Link href={'/'}>
            <Image className="logo" src={logo} alt="logo" width={168} height={40} />
          </Link>
        </div>

        <div className="center">
          <Link className="links" href={'/'}>
            Home
          </Link>
          <Link className="links" href={'/products'}>
            Shop
          </Link>
          <Link className="links" href={'/'}>
            News
          </Link>
          <Link className="links" href={'#footer'}>
            Contact
          </Link>
        </div>

        <div className="search-box">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="right">
          <Link href={'/'}>
            <CiUser />
          </Link>

          <div className="cart&CartModal-containner" onMouseLeave={() => setIsOpenCartModal(false)}>
            <Link className="cart-btn" href={'/cart'} onMouseEnter={() => setIsOpenCartModal(true)}>
              <span className="cart-qty">{cartTotal}</span>
              <CiShoppingCart />
            </Link>

            <div className="cart-modal" ref={CartModalElement}>
              <CartModal cartData={cartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
