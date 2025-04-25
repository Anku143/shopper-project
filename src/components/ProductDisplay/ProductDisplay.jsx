import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <div className="container">
        <div className="row flex  gap-4 my-[50px]">
          <div className="row-l flex gap-4 w-[45%]">
            <div className="row-l-image flex flex-col gap-5 w-[18%]">
              <img src={product.image} alt="" className="w-[106px]" />
              <img src={product.image} alt="" className="w-[106px]" />
              <img src={product.image} alt="" className="w-[106px]" />
              <img src={product.image} alt="" className="w-[106px]" />
            </div>
            <div className="row-l-image w-[80%] leading-none">
              <img src={product.image} alt="" className="w-full object-fit" />
            </div>
          </div>
          <div className="row-r w-[50%]">
            <div className="row-r-title text-[40px] font-[700] text-[#3d3d3d]">
              {product.name}
            </div>
            <div className="row-r-rating flex items-center mt-[15px] gap-2 text-[#1c1c1c]">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <div className="row-r-price flex items-center gap-3 my-[30px] text-[24px] font-[700]">
              <span className="row-r-price-new text-[#ff4141]">
                ${product.new_price}
              </span>
              <span className="row-r-price-old line-through text-[#818181]">
                ${product.old_price}
              </span>
            </div>
            <div className="row-r-description my-[5px] text-[14px] ">
              In this single tutorial we will make an eCommerce website using
              React JS or Online Store using React JS. We will create the Home
              page where we will display the trending products, offer banner,
              newsletter subscription form, then we will make product page for
              men's category, women's category and kids category. After that we
              will make the single product page with product image gallery,
              product price, product description and related products list, then
              we will make the shopping cart page, that will display the product
              added in the cart. We will also make the login register page where
              use can create an account or login to the Ecommerce website.
            </div>
            <div>
              <h3 className="text-2xl">Select Size</h3>
              <div className="row-r-size flex gap-2 my-3">
                <button className="row-r-size-button cursor-pointer px-[24px] py-[18px] font-semibold bg-[#dad9d9] ">
                  S
                </button>
                <button className="row-r-size-button cursor-pointer px-[24px] py-[18px] font-semibold bg-[#dad9d9] ">
                  M
                </button>
                <button className="row-r-size-button cursor-pointer px-[24px] py-[18px] font-semibold bg-[#dad9d9] ">
                  L
                </button>
                <button className="row-r-size-button cursor-pointer px-[24px] py-[18px] font-semibold bg-[#dad9d9] ">
                  XL
                </button>
                <button className="row-r-size-button cursor-pointer px-[24px] py-[18px] font-semibold bg-[#dad9d9] ">
                  XXL
                </button>
              </div>
            </div>

            <div className="row-r-button flex gap-4">
              <button
                className="row-r-button-add px-[20px] py-[10px] text-gray-600 bg-orange-500 hover:bg-orange-600 duration-300 text-white rounded-[20px] cursor-pointer"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
              <button className="row-r-button-wishlist px-[20px] py-[10px] text-gray-600 bg-orange-600 hover:bg-orange-500 duration-300 text-white rounded-[20px] cursor-pointer">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
