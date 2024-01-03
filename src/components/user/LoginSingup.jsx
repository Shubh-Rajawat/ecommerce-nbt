import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
import Login from "./Login";
import Signup from "./Signup";
import OtpVerify from "./OtpVerify";
import ForgotPassword from "./ForgotPassword";

const LoginSingup = () => {
  const dispatch = useDispatch();
  const { showLoginSignup, userComp, otpTab, forgotPasswordTab } = useSelector(
    (state) => state.nav
  );
  console.log(otpTab, userComp);
  return (
    <div>
      <Modal
        open={showLoginSignup}
        onClose={() => {
          dispatch(navAction.toggleLoginSignup());
        }}
      >
        <div className="  pt-6 overflow-y-[scroll]">
          {userComp && (
            <div className=" mt-5 rounded-b-[16px]   overflow-hidden">
              <div className="text-center md:px-16 px-8   ">
                <h3 className="ramto text-[#000000] text-[24px] text-wrap">
                  Welcome Back!
                </h3>
                <p className="text-[#777777] text-center text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="flex justify-center my-6">
                <div className="flex justify-between w-[200px] ">
                  <span
                    className={`cursor-pointer ${
                      userComp === "login"
                        ? "text-[#D63348] ramto text-[20px]"
                        : "text-[#09405E] ramto text-[20px]"
                    }`}
                    onClick={() => {
                      dispatch(navAction.setShowUserTab("login"));
                    }}
                  >
                    Login
                  </span>
                  <span
                    className={`cursor-pointer ${
                      userComp === "signup"
                        ? "text-[#D63348] ramto text-[20px]"
                        : "text-[#09405E] ramto text-[20px]"
                    }`}
                    onClick={() => {
                      dispatch(navAction.setShowUserTab("signup"));
                    }}
                  >
                    Sign-Up
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="">
            {otpTab && <OtpVerify />}
            {forgotPasswordTab && <ForgotPassword />}
            {userComp === "login" ? (
              <Login />
            ) : userComp === "signup" ? (
              <Signup />
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginSingup;
