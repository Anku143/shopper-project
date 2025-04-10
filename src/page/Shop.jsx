import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import Collection from "../components/Collection/Collection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      {/* <Collection /> */}
    </div>
  );
};

export default Shop;
