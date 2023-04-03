import React from 'react'
import Logo from '../img/logo.png'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with <b>React</b></span>
    </footer>
  )
}

export default Footer