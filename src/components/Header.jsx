import React from 'react'
import moon from '../assets/moon.svg'
import cart from '../assets/cart-plus.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header-componenta'>
      <header className="header">
        <div className="logo">
            <h2>C</h2>
        </div>
        <nav className="nav">
            <ul className="menu">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/card">Card</a>
                </li>
            </ul>
        </nav>
        <div className="icons">
            <img src={moon} font-size={1} width={24} height={24} alt="" />
            <img src={cart} alt="" />
        </div>
      </header>
    </div>
  )
}

export default Header
