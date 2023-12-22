import React from "react";
import pr from "../static/assets/pr1.svg";
const SingleProduct = () => {
  return (
    <div className=" mt-32">
      <div className="ss-container bg-green-300">
        <div className="flex gap-10">
          <div className=" relative overflow-hidden rounded-[50px] ">
            <img src={pr} alt="" className=" object-cover h-full w-full " />
            <div className=" absolute rounded-full bg-white w-[50px] h-[50px] top-8 right-8"></div>
          </div>
          <div className="bg-yellow-200 flex-1">
            <div className="">
              <h2 className="text-2pl">Crispy Chicken</h2>
              <p className="">Pollo Fritto 100g, insalata, mayo</p>
              <div className="">
                <div className="flex justify-between">
                  <div className="">
                    <input type="radio" name="size" id="size1" />
                    <label htmlFor="size1" className="text-3pl mx-3">
                      Small 5 pz.
                    </label>
                  </div>
                  <span className="text-1pl">790</span>
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
                  <span className="text-1pl">100</span>
                </div>
              </div>
              <div className="bg-[#F2F2F2] rounded-3xl ">
                <h2 className="text-2pl">Modify Ingredients</h2>
                <div className="">
                  <label htmlFor="one">
                    <input type="checkbox" name="one" id="one" />
                    Pomosoro
                  </label>
                  <span className="text-1pl">200</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
