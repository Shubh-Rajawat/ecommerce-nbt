import React, { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#F2F2F2] md:px-16 p-8 ">
      <div className="">
        <div className="flex flex-col items-start">
          <label htmlFor="name" className="text-[#09405E] ramto text-[14px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            autoComplete="off"
            className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
          />
        </div>
        <div className="flex flex-col items-start mt-6">
          <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
            Email address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            autoComplete="off"
            className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
          />
        </div>
        <div className="flex flex-col items-start mt-6 relative">
          <label
            htmlFor="password"
            className="text-[#09405E] ramto text-[14px]"
          >
            Password
          </label>
          <input
            type={showPassword ? `text` : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            autoComplete="off"
            className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
          />
          <div className=" text-red-600 absolute right-[10px] bottom-[10px]">
            {showPassword ? (
              <LuEyeOff
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <LuEye
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
        </div>
        <div className="">
          <span className="text-end text-[#D63348] text-[14px] cursor-pointer">
            Forgot password?
          </span>
        </div>
        <div className="flex items-center justify-center my-4">
          <button className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg">
            Sign-Up
          </button>
        </div>
        <div className="flex justify-center ">
          <p className="text-[#09405E] text-[16px]">
            Already have an account?
            <span className="text-[#D63348]"> Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
