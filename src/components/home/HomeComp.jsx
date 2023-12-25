import React from "react";
import HomeSwiper from "./HomeSwiper";

const HomeComp = () => {
  return (
    <>
      <HomeSwiper />

      {/* about home discription */}
      <div className="sks-about-home relative">
        <div className="ss-container   flex place-content-center">
          <div className="  text-center py-[5%] max-w-[800px]">
            <h1 className=" text-6xl popins font-extrabold">
              About <span className="text-[#D63348] ramto">Ambù</span>
            </h1>
            <p className="popins py-4 para-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="text-white bg-[#D63348] rounded-3xl py-3 px-4 my-3 ramto">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
