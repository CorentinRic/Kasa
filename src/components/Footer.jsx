import React from 'react'
import './../styles/components/Footer.css'
import logo from './../assets/images/logo-footer.png'

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <img src={logo} alt='Logo Kasa' />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    </footer>
  )
}

export default Footer