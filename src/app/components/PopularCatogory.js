import React from 'react'
import { subFont } from '../fonts'
import Image from 'next/image'
import { face, concealer, skincare, lips } from '../asset/catogory'

const PopularCatogory = () => {
  return (
    <div className='pupolar-catogory-section'>
      <div className="popular-catogory-container">

        <div className="title-wrapper">
          <h2 className={subFont.className}>Popular Categories</h2>
          <p>Etiam eget faucibus turpis, sit amet viverra eros. Maecenas eget vehicula nisl. Quisque imperdiet iaculis dignissim. In hac habitasse platea dictumst.</p>
        </div>

        <div className="catogory-wrapper">
          <ul>
            <li className='catogory-card'>
              <Image
                src={face}
                alt={'catogory'}
                layout='responsive'
              />
              <div className="content">
                <h2 className={subFont.className}>Face</h2>
                <span>
                  <button>SHOP NOW</button>
                </span>
              </div>
            </li>
            <li className='catogory-card'>
              <Image
                src={skincare}
                alt={'catogory'}
                layout='responsive'
              />
              <div className="content">
                <h2 className={subFont.className}>Skincare</h2>
                <span>
                  <button>SHOP NOW</button>
                </span>
              </div>
            </li>
            <li className='catogory-card'>
              <Image
                src={lips}
                alt={'catogory'}
                layout='responsive'
              />
              <div className="content">
                <h2 className={subFont.className}>Lips</h2>
                <span>
                  <button>SHOP NOW</button>
                </span>
              </div>
            </li>
            <li className='catogory-card'>
              <Image
                src={concealer}
                alt={'catogory'}
                layout='responsive'
              />
              <div className="content">
                <h2 className={subFont.className}>Concealer</h2>
                <span>
                  <button>SHOP NOW</button>
                </span>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default PopularCatogory