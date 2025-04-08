import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart_icon.png';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  return (
    <div>
      <header className="flex justify-evenly items-center p-4 bg-white shadow-md">
        <div className="logo flex items-center gap-[10px]">
          <img src={logo} alt="" />
          <p className="text-[38px] font-semibold text-[#171717]">SHOPPER</p>
        </div>
        <nav>
          <ul className="flex gap-[50px] text-[#626262] font-semibold text-[20px]">
            <li
              onClick={() => {
                setMenu('shop');
              }}
            >
              Shop {menu === 'shop' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('mens');
              }}
            >
              Men {menu === 'mens' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('womans');
              }}
            >
              Women {menu === 'womans' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('kids');
              }}
            >
              Kids {menu === 'kids' ? <hr /> : <></>}
            </li>
          </ul>
        </nav>
        <div className="nav-login-cart flex items-center  gap-[20px]">
          <button className="w-[157px] h-[58px] border-1 border-[#515151] rounded-[75px] bg-white text-[#515151] font-semibold text-[20px] cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
          <div className="relative">
            <img src={cart} alt="" className="cursor-pointer" />
            <div className="bg-red-500 text-[14px] text-white p-4 rounded-full w-[20px] h-[20px] flex items-center justify-center absolute top-[-12px] right-[-10px] cursor-pointer">
              0
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
