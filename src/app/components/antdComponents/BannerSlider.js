'use client'
import React, { useState, useEffect } from 'react'
import { Carousel, Divider } from 'antd'
import { client } from '../../../../sanity/lib/client'
import { urlForImage } from '../../../../sanity/lib/image'
import Link from 'next/link'
// style
import './BannerSlider.scss'

const BannerSlider = () => {
  const [bannerData, setBannerData] = useState([])
  const getBannerData = async() => {
    const query = `*[_type == "banner_images"]`
    const bannerData = await client.fetch(query)
    return bannerData
  } 
  useEffect(() => {
    getBannerData().then((data) =>{
       setBannerData(data)
    })
  }, [])
  return (
    <Carousel autoplay autoplaySpeed={2500} infinite fade>
      {bannerData?.map((item, ind) => (
        <div key={ind}>
          <div
            style={{
              height: '500px',
              backgroundImage: `url(${urlForImage(item.image)})`,
              width: '100%',
              backgroundSize: 'cover',
            }}
          >
            <div className="hero-banner-text">
              <h6>BOTANICAL SKINCARE</h6>
              <h2>Skincare made with the world’s finest plant oils and absolutes.</h2>
              <p>
                We all have skincare concerns: it is not always SIMPLE. Glowbar makes it easy with
                30-minute expert sessions targeting your top skincare concerns.
              </p>
              <Link href="/products">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
export default BannerSlider
