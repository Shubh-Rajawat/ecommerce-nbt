import React, { useRef, useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../static/assets/logo.png";
import { useDispatch } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import { ImExit } from "react-icons/im";
import LoginSingup from "../user/LoginSingup";
import { userActions } from "../../redux/actions/userAuth";

const Header = () => {
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className=" relative ">
        {/* upper header */}
        <div className="grid grid-cols-3 ss-container">
          <div className=""></div>
          <div className=" w-[42%] bg-[#D63348] h-[45px] absolute top-0 right-0 -z-10"></div>
          <div className="h-[45px] flex justify-between col-span-3 md:col-span-2 bg-[#D63348] pl-3 md:pl-10 py-2 rounded-bl-[45px] text-white">
            <div className="font-semibold text-xs md:text-md  flex items-center gap-2">
              <FaLocationDot className="text-xl" /> 5331 Rexford Court
              ,Montgomery AL 36116
            </div>
            <div className=" text-2xl md:text-3xl flex gap-4 font-semibold text-end relative">
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <CiShoppingCart className=" " />
                <span className="absolute text-sm -top-2 -right-3 rounded-full text-red-600 font-semibold w-6 h-6  bg-yellow-400 p-1 flex justify-center items-center">
                  99
                </span>
              </div>
              <CiUser
                className="cursor-pointer "
                onClick={() => {
                  dispatch(navAction.toggleLoginSignup());
                  dispatch(userActions.setFieldsEmpty(false));

                  dispatch(navAction.setShowUserTab("login"));
                }}
              />
              <LoginSingup />
              {/* Shubh code for dropdown */}
              {/* <button
                className="cursor-pointer outline-none bg-transparent"
                onBlur={() => {
                  setDropDown(false);
                }}
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              >
                <img
                  src="https://bit.ly/dan-abramov"
                  alt="User"
                  className="h-8  rounded-full border-2 border-white"
                />

                {dropDown ? (
                  <div class="popins z-10 bg-[#F2F2F2]  rounded-xl shadow w-48 absolute top-11 right-[5%] rounded-tr-none">
                    <ul class="py-2 text-[16px] text-slate-800 font-[600] text-left">
                      <li>
                        <span
                          onClick={() => {
                            navigate("/profile");
                          }}
                          class=" px-4  hover:bg-gray-300 flex items-baseline gap-2"
                        >
                          <FaUser className="text-[#D63348] text-sm" />
                          View Profile
                        </span>
                      </li>
                      <li>
                        <span class=" px-4  hover:bg-gray-300 flex items-center gap-2">
                          <ImExit className="text-[#D63348] text-sm" /> Logout
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </button> */}
            </div>
          </div>
        </div>
        {/* lower header */}
        {/* <div className="flex justify-between items-center mx-10 md:mx-20 py-6"> */}
        <div className="ss-container flex justify-between items-center py-6">
          <div className="w-48 md:w-64">
            <NavLink to="/">
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
        <HorizontalNav />
      </header>
    </>
  );
};

export default Header;
