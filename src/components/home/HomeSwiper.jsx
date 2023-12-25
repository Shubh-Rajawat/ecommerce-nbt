import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <>
      <div className="sks-swiper-home ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sks-homeImg">
              <div className="ss-container py-[10%]">
                <div className="max-w-[540px]">
                  <h1 className="w-[90%] text-6xl leading-[70px] text-white ramto text-start">
                    Make the <span className="text-[#D63348]"> amburger</span>{" "}
                    great again
                  </h1>
                  <p className="text-white popins py-5 w-[90%] text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <div className="banner-btns flex gap-x-3 mt-2">
                    <button className="text-white bg-[#D63348] rounded-3xl py-3 px-4 ">
                      View All Menu
                    </button>
                    <button className="text-[#D63348] bg-white rounded-3xl py-3 px-6">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sks-homeImg">
              <div className="ss-container py-[10%]">
                <div className="max-w-[540px]">
                  <h1 className="w-[90%] text-6xl leading-[70px] text-white ramto text-start">
                    Make the <span className="text-[#D63348]"> amburger</span>{" "}
                    great again
                  </h1>
                  <p className="text-white popins py-5 w-[90%] text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <div className="banner-btns flex gap-x-3 mt-2">
                    <button className="text-white bg-[#D63348] rounded-3xl py-3 px-4 ">
                      View All Menu
                    </button>
                    <button className="text-[#D63348] bg-white rounded-3xl py-3 px-6">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sks-homeImg">
              <div className="ss-container py-[10%]">
                <div className="max-w-[540px]">
                  <h1 className="w-[90%] text-6xl leading-[70px] text-white ramto text-start">
                    Make the <span className="text-[#D63348]"> amburger</span>{" "}
                    great again
                  </h1>
                  <p className="text-white popins py-5 w-[90%] text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <div className="banner-btns flex gap-x-3 mt-2">
                    <button className="text-white bg-[#D63348] rounded-3xl py-3 px-4 ">
                      View All Menu
                    </button>
                    <button className="text-[#D63348] bg-white rounded-3xl py-3 px-6">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
