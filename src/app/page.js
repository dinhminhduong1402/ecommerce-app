
import './styles/HomePage.scss'
import { subFont } from './fonts'
import Image from 'next/image'
import { BestSellerProduct, FeaturedProduct } from './components'

// images
import { brand1, brand2, brand3, brand4, brand5 } from './asset/brand'
import subBannerImage from './asset/sub-banner.jpg'

export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-banner-container">
          <div className="hero-banner-text">
            <h6>BOTANICAL SKINCARE</h6>
            <h2 className={subFont.className}>
              Skincare made with the world’s finest plant oils and absolutes.
            </h2>
            <p>
              We all have skincare concerns: it is not always SIMPLE. Glowbar makes it easy with
              30-minute expert sessions targeting your top skincare concerns.
            </p>
            <button>Shop now</button>
          </div>
        </div>
      </section>

      <BestSellerProduct/>

      <section className='brands-section'>
        <ul className='brands-container'>
          <li><Image src={brand1} width={200} height={50} alt='brand'/></li>
          <li><Image src={brand2} width={200} height={50} alt='brand'/></li>
          <li><Image src={brand3} width={200} height={50} alt='brand'/></li>
          <li><Image src={brand4} width={200} height={50} alt='brand'/></li>
          <li><Image src={brand5} width={210} height={50} alt='brand'/></li>
        </ul>
      </section>

      <section className='sub-banner'>
        <div className="sub-banner-container">
          <div className='image-wapper'>
            <Image
              src={subBannerImage || ''}
              alt='photo'
              layout='responsive'
            />
          </div>
          <div className='text-wrapper'>
          <h6>BOTANICAL SKINCARE</h6>
            <h2 className={subFont.className}>
              Skincare made with the world finest
            </h2>
            <p>
            Balance, purify, and heal your skin with Monastery.
Ingredients of the highest quality.
            </p>
            <button>Shop now</button>
          </div>
        </div>
      </section>

      <FeaturedProduct/>

      <section>Discount</section>
      <section>LatestNews</section>
    </>
  )
}


