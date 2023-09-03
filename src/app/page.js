import './styles/HomePage.scss'
import { subFont } from './fonts'

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

      <section>BestSeller</section>
      <section>Brands</section>
      <section>SubBanner</section>
      <section>FeaturedProducts</section>
      <section>Discount</section>
      <section>LatestNews</section>
      <section>FeaturedProducts</section>
    </>
  )
}
