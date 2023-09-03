import React from 'react'
import Link from 'next/link'
import '../styles/SubFooter.scss'

const SubFooter = () => {
  return (
    <div className="sub-footer">
      <div className="sub-footer-container">
        
        <div className="left">
          <p>Template resource: themeforest.net</p>
        </div>

        <div className="right">
          <Link className='links' href='/'>Facebook</Link>
          <Link className='links' href='/'>Instagram</Link>
          <Link className='links' href='/'>Twiter</Link>
          <Link className='links' href='/'>Pinterest</Link>
        </div>
      </div>
    </div>
  )
}

export default SubFooter