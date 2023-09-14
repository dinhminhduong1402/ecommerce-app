import React from 'react'
import '../styles/Footer.scss'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-container">
        <div className="col col-left">
          <h4>ABOUT COSMETSY</h4>
          <ul>
            <li>
              <Link className="links" href={'/'}>
                Our History
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Sourcing & Ingredients
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Packaging philosophy
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Customer reviews
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                The Newest List
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <Link className="links" href={'/'}>
                Regarding your order +45 6093 2222
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                shop@example.com
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Packaging philosophy
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Other inquiries +45 5357 1123 info@example.com
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>SUPPORT</h4>
          <ul>
            <li>
              <Link className="links" href={'/'}>
                Newsletter
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Sourcing & Ingredients
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Advertise Online
              </Link>
            </li>
            <li>
              <Link className="links" href={'/'}>
                Privacy Notice
              </Link>
              <Link className="links" href={'/'}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="col col-right">
          <h4>SUBSCRIBE FOR NEWS</h4>
          <p>Subscribe to our newsletter and get 10% off on your first order.</p>
          <div className="submit-form">
            <input type="email" placeholder="Your Email" />
            <button>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
