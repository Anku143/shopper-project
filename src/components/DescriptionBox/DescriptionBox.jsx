import React from "react";

const DescriptionBox = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="flex items-center font-[600] w-[171px] h-[70px] border-[1px] border-[#d0d0d0] justify-center ">
              Description
            </div>
            <div className="flex items-center font-[600] w-[171px] h-[70px] border-[1px] border-[#d0d0d0] justify-center bg-[#fbfbfb] text-[#555]">
              Review (122)
            </div>
          </div>
          <div className="description-box flex flex-col gap-[25px] p-[48px] pb-[70px] bg-[#fbfbfb] border-[1px] border-[#d0d0d0]">
            <p>
              In this single tutorial we will make an eCommerce website using
              React JS or Online Store using React JS. We will create the Home
              page where we will display the trending products, offer banner,
              newsletter subscription form, then we will make product page for
              men's category, women's category and kids category.
            </p>
            <p>
              {" "}
              After that we will make the single product page with product image
              gallery, product price, product description and related products
              list, then we will make the shopping cart page, that will display
              the product added in the cart. We will also make the login
              register page where use can create an account or login to the
              Ecommerce website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
