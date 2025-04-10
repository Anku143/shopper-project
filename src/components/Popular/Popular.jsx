import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import data_product from "../../assets/data";

const Popular = () => {
  return (
    <div className="popular w-full bg-[#f3f4f6] py-[60px]">
      <div className="container">
        <h2 className="text-[#171717] text-[50px] font-[600] relative text-center uppercase title">
          Popular in women
        </h2>

        <div className="popular-container flex justify-between items-center gap-[20px] pt-[40px]">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                new_price={item.new_price}
                image={item.image}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
