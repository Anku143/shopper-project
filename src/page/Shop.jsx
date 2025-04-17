import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import Collection from "../components/Collection/Collection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Collection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
