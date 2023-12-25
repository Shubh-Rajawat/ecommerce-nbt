import React from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../static/assets/logo.png";
const Header = () => {
  return (
    <header className="max-w-[1920px]">
      {/* upper header */}
      <div className="grid grid-cols-3">
        <div className=""></div>
        <div className="flex justify-between col-span-3 md:col-span-2 bg-red-600 px-3 md:px-10 py-2 rounded-bl-[45px] text-white">
          <div className="font-semibold text-xs md:text-md  flex items-center gap-2">
            {" "}
            <FaLocationDot className="text-xl" /> 5331 Rexford Court ,Montgomery
            AL 36116
          </div>
          <div className=" text-2xl md:text-3xl flex gap-2 font-semibold">
            <CiShoppingCart />
            <CiUser />
          </div>
        </div>
      </div>
      {/* lower header */}
      {/* <div className="flex justify-between items-center mx-10 md:mx-20 py-6"> */}
      <div className="ss-container flex justify-between py-6">
        <div className="w-48 md:w-64">
          <img src={logo} alt="not-found" />
        </div>
        <div className="">
          <RiMenu3Fill className="text-4xl font-extrabold" />
        </div>
      </div>
    </header>
  );
};

export default Header;
