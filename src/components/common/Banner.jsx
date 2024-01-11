import React from "react";
const Banner = (props) => {
  let heading = props?.data?.title?.split(" ");
  return (
    <div
      className="relative w-full h-[200px]  sm:h-[270px]  md:h-[300px] grid place-items-center bg-cover bg-no-repeat bg-center select-none "
      style={{ backgroundImage: `url(${props?.data?.img})` }}
    >
      <div className="h-full w-full absolute inset-0 bg-black/30 "></div>
      <div className="capitalize ramto xl:text-5xl  lg:text-4xl md:text-3xl sm:text-2xl text-xl  z-10 flex gap-3">
        <h2 className="text-white ">{heading[0]}</h2>
        {heading[1] && <h2 className="text-[#D63348] ">{heading[1]}</h2>}
      </div>
    </div>
  );
};

export default Banner;
