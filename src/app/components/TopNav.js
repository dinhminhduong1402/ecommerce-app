import React from 'react'
import '../styles/TopNav.scss'
import Link from 'next/link'

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-container">
        
        <div className="left">
          <Link className='links' href='/'>About us</Link>
          <Link className='links' href='/'>Wishlist</Link>
          <Link className='links' href='/'>My account</Link>
        </div>

        <div className="right">
          <Link className='links' href='/'>English</Link>
          <Link className='links' href='/'>Usd</Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav
