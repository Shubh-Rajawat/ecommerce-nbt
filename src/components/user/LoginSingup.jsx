import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
import Login from "./Login";
import Signup from "./Signup";

const LoginSingup = () => {
  const dispatch = useDispatch();
  const { showLoginSignup } = useSelector((state) => state.nav);

  const [tab, setTab] = useState("login");
  return (
    <div>
      <Modal
        open={showLoginSignup}
        onClose={() => {
          dispatch(navAction.toggleLoginSignup());
        }}
      >
        <div className="  pt-6 overflow-y-[scroll]">
          <div className=" mt-5 rounded-b-[16px]   overflow-hidden">
            <div className="text-center md:px-16 px-8   ">
              <h3 className="ramto text-[#000000] text-[24px] text-wrap">
                Welcome Back!
              </h3>
              <p className="text-[#777777] text-center text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex justify-center my-6">
              <div className="flex justify-between w-[200px] ">
                <span
                  className={`cursor-pointer ${
                    tab === "login"
                      ? "text-[#D63348] ramto text-[20px]"
                      : "text-[#09405E] ramto text-[20px]"
                  }`}
                  onClick={() => {
                    setTab("login");
                  }}
                >
                  Login
                </span>
                <span
                  className={`cursor-pointer ${
                    tab === "signup"
                      ? "text-[#D63348] ramto text-[20px]"
                      : "text-[#09405E] ramto text-[20px]"
                  }`}
                  onClick={() => {
                    setTab("signup");
                  }}
                >
                  Sign-Up
                </span>
              </div>
            </div>
          </div>
          <div className="">{tab === "login" ? <Login /> : <Signup />}</div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginSingup;
