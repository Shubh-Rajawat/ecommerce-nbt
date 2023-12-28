import React from "react";

const Signup = () => {
  return (
    <div className=" text-start">
      <div className="">
        <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
          Email address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className=" bg-transparent focus-visible:border-none"
        />
      </div>
    </div>
  );
};

export default Signup;
