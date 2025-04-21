import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Timer from "../components/Timer/Timer";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner bg-gradient-to-r from-[#ffd0b4] via-[#e1ffea22] to-[#e1ffea22]">
        <div className="container">
          <div className="banner_content flex justify-between">
            <div className="banner_text flex flex-col justify-center items-start">
              <h1 className="text-[80px] font-[600] text-orange-500">
                FLAT 50% OFF{" "}
              </h1>
              <Timer />
              <button className="px-[30px] py-[15px] bg-orange-500 text-white rounded-[20px] mt-[20px] hover:bg-orange-600 transition-all duration-300 ease-in-out cursor-pointer">
                Explore Now
              </button>
            </div>
            <div className="banner_img">
              <img src={props.banner} alt="banner" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div>
        <div className="container">
          <div className="product_grid flex justify-between">
            <div>
              <span>showing 1-12</span> out of 36 product
            </div>
            <div className="text-end flex items-center gap-2 py-[10px] px-[20px] bg-[#f5f5f5] rounded-[20px] cursor-pointer">
              Sort by <img src={dropdown_icon} alt="sort" className="h-[9px]" />
            </div>
          </div>

          <div className="product_grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
