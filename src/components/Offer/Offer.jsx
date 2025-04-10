import React from 'react';
import './Offer.css';
import exclusive_image from '../../assets/exclusive_image.png';

const Offer = () => {
  return (
    <div className="offer py-[60px]">
      <div className="container">
        <div className="row flex justify-between w-[90%] mx-auto bg-linear-to-bl from-[#fde1ff] to-[#e1ffea22] px-[140px]">
          <div className="offer-left text-[#171717] font-[600]">
            <h2 className='text-[80px]'>Exclusive</h2>
            <h2 className='text-[80px]'>Offer for you</h2>
            <p className='text-[22px] '>Only best seller product</p>
            <button className='w-[282px] rounded-[32px] border-none bg-[#ff4141] text-white text-[22px] font-[500] mt-[30px] cursor-pointer h-[70px]'>Check Now</button>
          </div>
          <div className="offer-right">
            <img src={exclusive_image} alt="Offer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
