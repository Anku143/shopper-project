import React from "react";
import "./Collection.css";
import new_collections from "../../assets/new_collections";
import Item from "../Item/Item";

const Collection = () => {
  return (
    <div className="collection">
      <div className="container">
        <div className="collection_content">
          <h2 className="text-[#171717] text-[50px] font-[600] relative text-center uppercase title">
            New Collection
          </h2>
          <div className="collection_items">
            {new_collections.map((item, i) => {
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
    </div>
  );
};

export default Collection;
