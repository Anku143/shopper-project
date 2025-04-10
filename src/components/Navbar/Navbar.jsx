import logo from '../../assets/logo.png';
import cart from '../../assets/cart_icon.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container">
        <header className="flex justify-between items-center p-4 ">
          <div className="logo">
            <Link to="/" className="flex items-center gap-[10px]">
              <img src={logo} alt="" />
              <p className="text-[38px] font-semibold text-[#171717]">
                SHOPPER
              </p>
            </Link>
          </div>
          <nav>
            <ul className="flex gap-[50px] text-[#626262] font-semibold text-[20px]">
              <li>
                <NavLink to="/">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/mens">Men</NavLink>
              </li>
              <li>
                <NavLink to="/womans">Women</NavLink>
              </li>
              <li>
                <NavLink to="/kids">Kids</NavLink>
              </li>
            </ul>
          </nav>
          <div className="nav-login-cart flex items-center  gap-[20px]">
            <Link
              to="/login"
              className="w-[157px] h-[58px] border-1 border-[#515151] rounded-[75px] flex justify-center items-center bg-white text-[#515151] font-semibold text-[20px] cursor-pointer active:bg-[#f3f3f3]"
            >
              Login
            </Link>
            <div className="relative">
              <Link to="/cart">
                <img src={cart} alt="" className="cursor-pointer" />
                <div className="bg-red-500 text-[14px] text-white p-4 rounded-full w-[20px] h-[20px] flex items-center justify-center absolute top-[-12px] right-[-10px] cursor-pointer">
                  0
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
