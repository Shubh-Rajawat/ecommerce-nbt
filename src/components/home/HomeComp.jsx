import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeSwiper from "./HomeSwiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../static/assets/burgur1.png";

// import required modules
import { Navigation } from "swiper/modules";
const HomeComp = () => {
  const { showNav } = useSelector((state) => state.nav);

  const sliderData = [
    {
      heading1: "Chicken",
      heading2: "Burger",

      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: image,
    },
    {
      heading1: "Chicken",
      heading2: "Burger",

      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: image,
    },
    {
      heading1: "Chicken",
      heading2: "Burger",

      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: image,
    },
  ];

  return (
    <>
      <div>
        <HomeSwiper />

        {/* about home discription */}
        <div className="sks-about-home relative">
          <div className="ss-container   flex place-content-center">
            <div className="  text-center py-[5%] max-w-[800px]">
              <h1 className=" text-2xl popins font-extrabold lg:text-4xl xl:text-5xl 2xl:text-6xl">
                About <span className="text-[#D63348] ramto">Ambù</span>
              </h1>
              <p className="popins py-4 para-text ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="btn-red my-3 ramto">Find out more</button>
            </div>
          </div>
        </div>
      </div>
      {/* carousel second in home page */}
      <div className="bg-[#E9AF22]">
        <section className="ss-container bg-transparent">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper bg-transparent"
          >
            {sliderData.map((res) => {
              return (
                <SwiperSlide className=" ">
                  <section className="flex bg-[#E9AF22]">
                    <div className="">
                      <h1>{res?.heading1}</h1>
                      <h1>{res?.heading2}</h1>
                      <p>{res?.para}</p>
                    </div>
                    <div className="">
                      <img src={res?.img} className="w-100" />
                    </div>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default HomeComp;
