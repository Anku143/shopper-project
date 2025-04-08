import React from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="logo flex items-center">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <nav>
          <ul>
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </nav>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
