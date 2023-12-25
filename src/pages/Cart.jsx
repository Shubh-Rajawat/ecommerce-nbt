import React from "react";
import p1 from "../static/assets/c1.svg";
import coin from "../static/assets/conin.svg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const pro = [1, 2];
const Cart = () => {
  return (
    <div>
      <div className="ss-container  space1">
        <div className="grid grid-cols-7 gap-8">
          <div className=" col-span-4 ">
            {pro &&
              pro?.map((item, ind) => {
                return (
                  <div className="bg-[#F2F2F2]  flex gap-6 rounded-2xl p-8 relative overflow-hidden mb-4">
                    <div className=" overflow-hidden flex-1">
                      <img src={p1} alt="" className="rounded-2xl" />
                    </div>
                    <div className=" flex-1 ">
                      <h1 className="text-2pl">Crispy Chicken</h1>
                      <p className="text-5pl my-5">
                        Pollo Fritto 100g, insalata, mayo
                      </p>
                      <div className="flex justify-between">
                        <h3 className="text-3pl">Menu Large</h3>
                        <h4 className="text-1pl">1090</h4>
                      </div>
                      <h3 className="text-1pl my-2">1090</h3>
                      <div className=" mt-5   flex">
                        <div className="bg-[#09405E] rounded-[50px] flex py-1">
                          <button className=" text-2xl px-3 text-white">
                            <FaMinus />
                          </button>
                          <input
                            type="text"
                            name=""
                            value={5}
                            id=""
                            className=" w-5 text-2xl font-semibold   text-red-600 bg-transparent "
                          />
                          <button className=" text-2xl px-2 text-white ">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" absolute top-0 right-0 bg-[#D63348] p-3 rounded-es-xl ">
                      <FaTrashAlt
                        color="white"
                        size={18}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className=" col-span-3">
            <div className="">
              <h1 className="text-6pl">Promo Code</h1>
              <div className="my-3 border-dotted border-2 rounded-lg border-black overflow-hidden flex justify-between items-center px-6 bg-[#F2F5F7]">
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" h-12 bg-transparent w-full focus-visible:outline-none"
                    placeholder="Enter coupon code here"
                  />
                </div>
                <div className="">
                  <button className="text-7pl">Apply</button>
                </div>
              </div>
              <div className="my-6 rounded-lg bg-[#F2F5F7] p-5">
                <label htmlFor="points" className="text-8pl">
                  <input
                    type="checkbox"
                    name="points"
                    id="points"
                    className=" mr-3"
                  />
                  Pay Using Points
                </label>
                <div className="flex  mt-2">
                  <span className="flex items-center font-bold">
                    Available Balance:
                    <span className="mx-1">
                      <img src={coin} alt="" />
                    </span>
                  </span>
                  <span className="font-bold text-red-700">200 pts</span>
                </div>
              </div>
              <div className="">
                <h1 className="text-6pl my-4">Delivery</h1>
                <div className="flex flex-col gap-3">
                  <label htmlFor="pickup" className=" text-xl font-semibold">
                    <input
                      type="radio"
                      name="del"
                      id="pickup"
                      className="mr-2"
                    />
                    Pick Up
                  </label>
                  <label
                    htmlFor="free_delivery"
                    className=" text-xl font-semibold"
                  >
                    <input
                      type="radio"
                      name="del"
                      id="free_delivery"
                      className="mr-2"
                    />
                    Free Delivery
                  </label>
                </div>
              </div>
              <div className="flex justify-between my-4">
                <span className="font-bold text-xl text-[#777777]">
                  Sub Total
                </span>
                <span className="text-1pl">600</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-xl">
                  Total <span className="text-[#777777]">(2 items)</span>
                </span>
                <span className="text-1pl">600</span>
              </div>
              <div className=" mt-5">
                <button className="btn-red ">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
