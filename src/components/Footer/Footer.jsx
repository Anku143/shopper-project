import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/logo_big.png";
import InstaLogo from "../../assets/instagram_icon.png";
import PrintLogo from "../../assets/pintester_icon.png";
import WhatsLogo from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pt-[60px]">
      <div className="container">
        <div className="row">
          <div className="footer-logo flex items-center justify-center gap-[20px]">
            <img src={FooterLogo} alt="Logo" />
            <p className="text-[#383838] text-[46px] font-[700]">SHOPPER</p>
          </div>
          <div className="footer-links text-[20px] text-[#252525] flex items-center justify-center gap-[50px] pt-[60px] pb-[20px]">
            <ul className="flex text-[#252525] gap-[50px] text-[20px]">
              <li className="hover:text-[red] hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <Link to="/company"> Company </Link>
              </li>
              <li className="hover:text-[red] hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <Link to="/product"> Products </Link>
              </li>
              <li className="hover:text-[red] hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <Link to=""> Offices </Link>
              </li>
              <li className="hover:text-[red] hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <Link to=""> About Us </Link>
              </li>
              <li className="hover:text-[red] hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <Link to=""> Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className="footer-links py-[20px]">
            <ul className="flex gap-[20px] justify-center">
              <li className="hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <img src={InstaLogo} alt="" />
              </li>
              <li className="hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <img src={PrintLogo} alt="" />
              </li>
              <li className="hover:cursor-pointer hover:scale-110 transition-all duration-300">
                <img src={WhatsLogo} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <p className="py-[10px] text-center text-[14px] text-[#A0A0A0]">
            Copyright &copy; 2025 Shopper. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
