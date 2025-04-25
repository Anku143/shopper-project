import React from "react";
import data_product from "../../assets/data"; // Adjust the import path as necessary
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="related_products_section bg-[#f8f8f8] py-[50px]">
      <div className="container">
        <div className="related_products flex flex-col gap-[20px]">
          <h2 className="text-[30px] font-[600] relative title text-center">
            Related Products
          </h2>
          <div className="related_product_grid">
            <div className="related_product_item bg-white p-4 rounded-lg shadow-md flex w-full gap-4 mt-[50px]">
              {data_product.map((item, i) => {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    category={item.category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
