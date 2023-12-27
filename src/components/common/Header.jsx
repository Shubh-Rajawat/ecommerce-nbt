import React, { useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../static/assets/logo.png";
import { useDispatch } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
import { NavLink } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className=" relative">
      {/* upper header */}
      <div className="grid grid-cols-3 ss-container">
        <div className=""></div>
        <div className=" w-[42%] bg-[#D63348] h-[45px] absolute top-0 right-0 -z-10"></div>
        <div className="h-[45px] flex justify-between col-span-3 md:col-span-2 bg-[#D63348] pl-3 md:pl-10 py-2 rounded-bl-[45px] text-white">
          <div className="font-semibold text-xs md:text-md  flex items-center gap-2">
            {" "}
            <FaLocationDot className="text-xl" /> 5331 Rexford Court ,Montgomery
            AL 36116
          </div>
          <div className=" text-2xl md:text-3xl flex gap-2 font-semibold text-end">
            <CiShoppingCart />
            <CiUser />
          </div>
        </div>
      </div>
      {/* lower header */}
      {/* <div className="flex justify-between items-center mx-10 md:mx-20 py-6"> */}
      <div className="ss-container flex justify-between py-6">
        <div className="w-48 md:w-64">
          <NavLink to="/">
            {" "}
            <img src={logo} alt="not-found" />
          </NavLink>
        </div>
        <div className="">
          <RiMenu3Fill
            className="text-4xl font-extrabold cursor-pointer"
            onClick={() => {
              dispatch(navAction.toggleNav());
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;