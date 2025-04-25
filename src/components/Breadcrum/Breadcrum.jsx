import React from "react";
import arrow from "../../assets/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="my-[25px]">
      <div className="container">
        <div className="flex items-center gap-2 py-[10px] px-[20px] bg-[#0000004e] rounded-[20px] cursor-pointer">
          <span className="flex items-center gap-1 text-[14px] font-[500] text-[#787878]">
            Home <img src={arrow} alt="" className="h-[10px] w-[16px]" />
          </span>

          <span className="flex items-center gap-1 text-[14px] font-[500] text-[#787878]">
            Shop <img src={arrow} alt="" className="h-[10px] w-[16px]" />
          </span>
          <span className="flex items-center gap-1 text-[14px] font-[500] text-[#787878]">
            {product.category}{" "}
            <img src={arrow} alt="" className="h-[10px] w-[16px]" />
          </span>
          <span className="flex text-[14px] font-[500] text-[#787878]">
            {product.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
