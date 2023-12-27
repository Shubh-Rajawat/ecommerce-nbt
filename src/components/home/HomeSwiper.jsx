import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import baner from "../../static/assets/homeimg.png";
import baner2 from "../../static/assets/banner2.png";

import baner3 from "../../static/assets/banner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
const HomeSwiper = () => {
  const { showNav } = useSelector((state) => state.nav);
  const data = [
    {
      heading1: "Make the",
      heading2: "amburger",
      heading3: "great again",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
      background: baner,
    },
    {
      heading1: "Make the",
      heading2: "amburger",
      heading3: "great again",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
      background: baner2,
    },
    {
      heading1: "Make the",
      heading2: "amburger",
      heading3: "great again",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
      background: baner3,
    },
  ];
  return (
    <>
      <div className="sks-swiper-home ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {data.map((res) => {
            return (
              <SwiperSlide>
                <div
                  className="sks-homeImg"
                  style={{ backgroundImage: `url(${res.background})` }}
                >
                  <div className=" w-full h-[50px]    relative overflow-hidden">
                    <div
                      className={` relative h-[50px] bg-[#09405E] w-full  ${
                        showNav
                          ? "   top-0  transition-all duration-[800ms]  ease-in-out"
                          : "  -top-[50px] transition-all duration-[800ms]  ease-in-out"
                      }     `}
                    ></div>
                  </div>
                  <div className="ss-container py-[10%]">
                    <div className="max-w-[540px]">
                      <h1 className="w-[90%]  xl:text-6xl md:text-4xl sm:text-3xl text-2xl lg:text-5xl leading-[40px] text-white ramto  text-center md:text-start">
                        Make the{" "}
                        <span className="text-[#D63348]"> amburger</span> great
                        again
                      </h1>
                      <p className="text-white popins py-5 w-[90%] text-sm md:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.
                      </p>
                      <div className="banner-btns flex gap-x-3 mt-2 justify-center md:justify-start ">
                        <button className="text-white bg-[#D63348] rounded-3xl py-3 px-4 text-sm md:text-lg">
                          View All Menu
                        </button>
                        <button className="text-[#D63348] bg-white rounded-3xl py-3 px-6 text-sm md:text-lg">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
