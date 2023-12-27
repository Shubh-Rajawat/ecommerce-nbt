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
      <div className="bg-[#E9AF22] home-about-swiper py-[2%]">
        <section className="ss-container bg-transparent">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {sliderData.map((res) => {
              return (
                <SwiperSlide className=" ">
                  <section className="flex bg-[#E9AF22] text-start py-12 px-16">
                    <div className="flex flex-col place-content-center">
                      <h1 className="text-8xl ramto text-white">
                        {res?.heading1}
                      </h1>
                      <h1 className="text-7xl spicy text-[#D63348]">
                        {res?.heading2}
                      </h1>
                      <p className="popins text-white">{res?.para}</p>
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

      {/* about beyond meat */}
      <AboutHomeComp aboutHomeComp={aboutHomeComp} />
      {/* about Gelati */}
      <AboutHomeComp aboutHomeComp={aboutHomeComp2} />
      {/* downoad box */}

      <section>
        <div className="ss-container flex py-24">
          <div className="">
            <img src={download} />
          </div>
          <div className="max-w-[650px]">
            <h1>Download </h1>
            <h1>App Now</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
