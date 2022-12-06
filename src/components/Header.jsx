import React from 'react'
import {NavLink} from 'react-router-dom'
import './../styles/components/Header.css'
import logo from './../assets/images/logo.png'

function Header() {
  return (
    <header>
      <img className='header__logo' src={logo} alt="Logo de l'application."/>
      <nav className='header__nav'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>

  )
}

export default Header