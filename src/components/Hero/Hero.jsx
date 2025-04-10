import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import hand_icon from '../../assets/hand_icon.png';
import arrow from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero bg-linear-to-bl from-[#fde1ff] to-[#e1ffea22] w-full py-[40px]">
      <div className="container">
        <div className=" flex justify-center items-center">
          <div className="flex flex-1 flex-col gap-[20px] justify-center leading-[1]">
            <h1 className="text-[26px] font-semibold text-[#090909]">
              NEW ARRIVAL ONLY
            </h1>
            <div>
              <div className="flex items-center gap-[10px]">
                <p className="text-[#171717] font-semibold text-[100px]">new</p>
                <img src={hand_icon} alt="" className="w-[105px]" />
              </div>
              <p className="text-[#171717] font-semibold text-[100px]">
                Collection
              </p>
              <p className="text-[#171717] font-semibold text-[100px]">
                for Everyone
              </p>
            </div>
            <div className="mt-[30px]">
              <Link className="flex items-center justify-center gap-[10px] bg-[#ff4141] text-white w-[310px] h-[70px] rounded-[75px] font-medium text-[22px] cursor-pointer active:bg-[#f3f3f3]">
                <p className="font-medium">Latest Collection</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img src={hero_image} alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
