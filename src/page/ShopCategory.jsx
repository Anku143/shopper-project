import React, { useContext } from "react";

import { ShopContext } from "../Context/ShopContext";

import Timer from "../components/Timer/Timer";

const ShopCategory = ({ banner }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img src={banner} alt="banner" />
      <Timer />
    </div>
  );
};

export default ShopCategory;
