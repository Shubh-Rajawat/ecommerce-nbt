import React from "react";
import cart from "../../static/assets/cart.svg";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="space1">
      <div className="ss-container flex justify-center items-center ">
        <div className="  flex justify-center items-center flex-col gap-6">
          <div className="md:w-44 w-28">
            <img src={cart} alt="" className=" object-cover" />
          </div>
          <div className="">
            <h2 className=" text-1cl text-center">Your Cart Is empty</h2>
            <p className="text-[#777777] mt-4 text-lg text-center">
              Looks like you haven't added anything to your cart yet
            </p>
          </div>
          <div className="">
            <button
              className="btn-red"
              onClick={() => {
                navigate("/products");
              }}
            >
              Add Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
