import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeSwiper from "./HomeSwiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../static/assets/burgur1.png";
import download from "../../static/assets/downloadapp.png";
// import required modules
import { Navigation } from "swiper/modules";
import AboutHomeComp from "./AboutHomeComp";
import DownloadIcon from "../common/DownloadIcon";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
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

  const aboutHomeComp = [
    {
      about: "About",
      abouthead: "Beyond Meat",
      para1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      aboutheadColor: "text-[#D63348]",
      paraColor: "text-[#777777]",
    },
  ];

  const aboutHomeComp2 = [
    {
      about: "About",
      abouthead: "Gelati",
      para1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      background: "bg-[#D63348]",
      aboutColor: "text-[#FFFFFF]",
      aboutheadColor: "text-[#09405E]",
      paraColor: "text-[white]",
    },
  ];
  const downloadApp = [
    {
      icon: <FaApple />,
      text: "AVAILABLE ON THE",
      name: "Apple Store",
    },
    {
      icon: <IoLogoGooglePlaystore />,
      text: "ANDROID APP ON",
      name: "Google play",
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
      <div className="bg-[#E9AF22] home-about-swiper py-12">
        <section className="ss-container bg-transparent">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {sliderData.map((res, ind) => {
              return (
                <SwiperSlide className=" " key={ind}>
                  <section className="flex bg-[#E9AF22] text-start py-6 lg:py-12  px-11 lg:px-16">
                    <div className="flex flex-col place-content-center">
                      <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl ramto text-white">
                        {res?.heading1}
                      </h1>
                      <h1 className="text-2xl spicy text-[#D63348]  md:text-5xl xl:text-6xl 2xl:text-8xl">
                        {res?.heading2}
                      </h1>
                      <p className="popins text-white text-[13px] sm:text-[16px] lg:text-[18px]">
                        {res?.para}
                      </p>
                    </div>
                    <div className="w-[100%]  grid place-content-center">
                      <img src={res?.img} className="w-100" />
                    </div>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </div>

      {/* about beyond meat */}
      <AboutHomeComp aboutHomeComp={aboutHomeComp} />
      {/* about Gelati */}
      <AboutHomeComp aboutHomeComp={aboutHomeComp2} />
      {/* downoad box */}

      <section className="sks-about-home relative">
        <div className="ss-container grid grid-cols-5 py-24 gap-4">
          <div className=" md:col-span-2 col-span-5">
            <img src={download} />
          </div>
          <div className=" md:col-span-3 col-span-5 grid place-content-center place-items-center md:place-items-start">
            <h1 className="text-[#D63348] text-3xl md:text-4xl ramto">
              Download{" "}
            </h1>
            <h1 className="text-[#000000] text-3xl md:text-4xl ramto my-2">
              App Now
            </h1>
            <p className="para-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-6">
              <DownloadIcon downloadApp={downloadApp} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
