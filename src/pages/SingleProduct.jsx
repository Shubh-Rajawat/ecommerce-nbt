import React, { useState } from "react";
import pr from "../static/assets/pr1.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
const SingleProduct = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className=" mt-32 select-none">
      <div className="ss-container ">
        <div className="flex gap-10 md:flex-row flex-col">
          <div className=" relative overflow-hidden rounded-[50px] flex-1">
            <img src={pr} alt="" className=" object-cover h-full w-full " />
            <div className=" absolute rounded-full bg-white w-[50px] h-[50px] top-8 right-8 flex items-center justify-center">
              {isLiked ? (
                <IoIosHeartEmpty
                  color="red"
                  size={26}
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                />
              ) : (
                <IoMdHeart
                  color="red"
                  size={26}
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                />
              )}
            </div>
          </div>
          <div className=" flex-1">
            <div className="">
              <h2 className="text-2pl">Crispy Chicken</h2>
              <p className="my-3">Pollo Fritto 100g, insalata, mayo</p>
              <div className="">
                <div className="flex justify-between">
                  <div className="">
                    <input
                      type="radio"
                      name="size"
                      id="size2"
                      className="text-3pl "
                    />
                    <label htmlFor="size2" className="text-3pl mx-3">
                      Small 5 pz.
                    </label>
                  </div>
                  <span className="text-1pl mr-5">100</span>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <input
                      type="radio"
                      name="size"
                      id="size2"
                      className="text-3pl "
                    />
                    <label htmlFor="size2" className="text-3pl mx-3">
                      Small 5 pz.
                    </label>
                  </div>
                  <span className="text-1pl mr-5">100</span>
                </div>
              </div>
              <div className="bg-[#F2F2F2] rounded-3xl p-5 mt-5">
                <h2 className="text-2pl">Modify Ingredients</h2>
                <div className="flex justify-between mb-3">
                  <label htmlFor="one" className="text-4pl">
                    <input
                      type="checkbox"
                      name="one"
                      id="one"
                      className=" mr-4 text-3pl"
                    />
                    Pomosoro
                  </label>
                  <span className="text-1pl">200</span>
                </div>
                <div className="flex justify-between mb-3">
                  <label htmlFor="one" className="text-4pl">
                    <input
                      type="checkbox"
                      name="one"
                      id="one"
                      className=" mr-4 text-3pl"
                    />
                    Pomosoro
                  </label>
                  <span className="text-1pl">200</span>
                </div>
              </div>
              <button className="btn-red mt-5">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
