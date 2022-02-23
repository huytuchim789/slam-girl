import React, { useState, useEffect } from 'react'
import footerImg from './../../resources/images/footer_logo.png'

function Footer() {
  return (
    <footer>
      <div class="footer">
        <img src={footerImg} alt="" />
        <p>© 2022 Immortals Pty Ltd</p>
      </div>
    </footer>
  )
}

export default Footer
