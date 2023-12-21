import React from "react";
import location from "../../../static/assets/location.svg";
const HeaderUpper = () => {
  return (
    <div className="flex justify-end ">
      <div className="bg-[#D63348] max-w-[1199px] w-full h-16 rounded-bl-[80px]">
        <div className="flex items-center">
          <div className=" text-white flex items-center bg-slate-700">
            <span className="">
              <img src={location} alt="location" />
            </span>
            <span className="">5331 Rexford Court, Montgomery AL 36116</span>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
