import React, { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#F2F2F2] p-8">
      <div className="">
        <div className="flex flex-col items-start">
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
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            autoComplete="off"
            className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
          />
          <div className=" text-red-600 absolute right-[10px] bottom-[10px]">
            {/* <LuEye /> */}
            <LuEyeOff />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
