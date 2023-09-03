import React from 'react'
import '../styles/Header.scss'

// icons
import { CiSearch, CiUser, CiShoppingCart,  } from 'react-icons/ci'

// images
import Image from 'next/image'
import logo from '../asset/logo.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>

        <div className='left'>
          <Image 
          className='logo'
          src={logo}
          alt='logo'
          width={168}
          height={40}
          />
        </div>

        <div className='center'>
          <Link className='links' href={'/'}>Home</Link>
          <Link className='links' href={'/'}>Shop</Link>
          <Link className='links' href={'/'}>News</Link>
          <Link className='links' href={'/'}>Contact</Link>
        </div>
        
        <div className='search-box'>
          <CiSearch className='search-icon'/>
          <input type="text" placeholder='Search' />
        </div>

        <div className='right'>
          <Link href={'/'}>
            <CiUser/>
          </Link>
          <Link href={'/'}>
            <CiShoppingCart/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header