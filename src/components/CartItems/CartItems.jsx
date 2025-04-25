import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    allRemoveFromCart,
  } = useContext(ShopContext);
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="row-l">
            <div className="row-l-image flex justify-between  gap-5">
              <h4>Product</h4>
              <h4>Title</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
              <h4>Remove</h4>
            </div>
            <hr />
            <div>
              {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <div>
                      <div className="row-l-image flex justify-between items-center  gap-5">
                        <img src={e.image} alt="" className="w-[106px]" />
                        <h4>{e.name}</h4>
                        <h4>${e.new_price}</h4>
                        <button
                          onClick={() => removeFromCart(e.id)}
                          className="bg-[#ff4141] text-white px-2 py-1 rounded-[5px]"
                        >
                          -
                        </button>
                        <h4>{cartItems[e.id]}</h4>
                        <button
                          onClick={() => addToCart(e.id)}
                          className="bg-[#ff4141] text-white px-2 py-1 rounded-[5px]"
                        >
                          +
                        </button>
                        {/* <button>{cartItems[e.id]}</button> */}
                        <h4>${e.new_price * cartItems[e.id]}</h4>
                        <img
                          src={removeIcon}
                          alt=""
                          onClick={() => allRemoveFromCart(e.id)}
                        />
                      </div>
                      <hr />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
