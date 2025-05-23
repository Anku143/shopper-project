import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, image, new_price, old_price, id }) => {
  return (
    <div className="item w-[320px] hover:transform hover:scale-[1.02] transition-all duration-600 ease-in-out bg-white rounded-[10px] shadow-lg p-[20px]">
      <Link to={`/product/${id}`}>
        {" "}
        <img src={image} alt="" onClick={window.scrollTo(0, 0)} />
        <h2 className="item-name">{name}</h2>
        <div className="item-price flex gap-[20px] text-[#374151] text-[18px] font-[600]">
          <p className="item-price-new my-[6px]">${new_price}</p>
          <p className="item-price-old my-[6px] text-[#8c8c8c]  font-[500] line-through">
            ${old_price}
          </p>
        </div>
      </Link>
      <button className="item-button">Add to Cart</button>
      <button className="item-button">Add to Wishlist</button>
      <button className="item-button">View Details</button>
    </div>
  );
};

export default Item;
