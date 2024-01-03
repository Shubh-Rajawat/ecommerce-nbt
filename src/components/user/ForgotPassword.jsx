import React from "react";

const ForgotPassword = () => {
  return (
    <section className=" text-center pt-5">
      <div className="text-center   md:px-16 px-8 py-4">
        <h3 className="ramto text-[#000000] text-[24px] text-wrap">
          Forgot Password?
        </h3>
        <p className="text-[#777777] text-center text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="py-8 bg-[#F2F2F2] md:px-16 px-8">
        <div className="flex flex-col items-start px-8">
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
        <div className="text-center py-3">
          <button className=" rounded-[30px] text-white ramto bg-[#D63348] text-[16px] px-6 tracking-[2px] hover:text-[#D63348] hover:bg-white border border-[#D63348] transition-all duration-200">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
