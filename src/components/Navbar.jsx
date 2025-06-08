import React from 'react'
import logo from '../assets/logo_gr.png'


const Navbar = () => {
  return (
    <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-3-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li><a href="#home">Trang chủ</a></li>
        <li><a href="#blog">Blog cộng đồng</a></li>
        <li><a href="#mission">Nhiệm vụ xanh</a></li>
        
        
        <li>
          <button class="btn">
            Quyên góp cho cộng đồng
            <span><i class="ri-arrow-right-long-line"></i></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
