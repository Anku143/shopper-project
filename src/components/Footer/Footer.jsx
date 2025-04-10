import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/logo_big.png";
import InstaLogo from "../../assets/instagram_icon.png";
import PrintLogo from "../../assets/pintester_icon.png";
import WhatsLogo from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer py-[60px]">
      <div className="container">
        <div className="row">
          <div className="footer-logo">
            <img src={FooterLogo} alt="Logo" />
            <p>SHOPPER</p>
          </div>
          <div className="footer-links">
            <ul>
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <img src={InstaLogo} alt="" />
              </li>
              <li>
                <img src={PrintLogo} alt="" />
              </li>
              <li>
                <img src={WhatsLogo} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright &copy; 2025 Shopper. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
