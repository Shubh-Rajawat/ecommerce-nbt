import React, { useState } from "react";
import { useSelector } from "react-redux";

const HomeComp = () => {
  const { showNav } = useSelector((state) => state.nav);
  console.log("showNav", showNav);

  return (
    <div>
      <div className="sks-homeImg">
        <div className=" w-full h-[50px]    relative overflow-hidden">
          <div
            className={` relative h-[50px] bg-[#09405E] w-full    ${
              showNav
                ? "  -top-[50px] transition-all duration-[800ms]  ease-in-out"
                : "   top-0  transition-all duration-[800ms]  ease-in-out"
            }     `}
          ></div>
        </div>
        <div className="ss-container py-[10%]">
          <div className="max-w-[540px]">
            <h1 className="w-[90%] text-6xl leading-[70px] text-white">
              Make the <span className="text-[#D63348]"> amburger</span> great
              again
            </h1>
            <p className="text-white font-[Poppins] py-5 w-[90%] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
            <div className="banner-btns flex gap-x-3">
              <button className="text-white bg-[#D63348] rounded-3xl py-2 px-4 ">
                View All Menu
              </button>
              <button className="text-[#D63348] bg-white rounded-3xl py-2 px-6">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
