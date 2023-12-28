import React from "react";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadIcon = ({ downloadApp }) => {
  return (
    <>
      <section>
        <div className="flex gap-3 text-white">
          {downloadApp?.map((item, i) => {
            return (
              <div
                className="bg-[#D63348] rounded-full flex items-center py-2 px-5 md:gap-3 justify-between"
                key={i}
              >
                <div className=" lg:text-xl xl:text-4xl">{item?.icon}</div>
                <div className="flex flex-col">
                  <span className="text-[8px]/[5px]">{item.text}</span>
                  <span className="text-sm md:text-md font-semibold">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DownloadIcon;
