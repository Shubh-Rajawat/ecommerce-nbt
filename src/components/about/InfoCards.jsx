import React from "react";
import tel from "../../static/assets/tel.svg";
import sms from "../../static/assets/sms.svg";
import location from "../../static/assets/location.svg";

const InfoCards = () => {
  return (
    <div className="ss-container ">
      <div className="flex gap-5 md:gap-8 md:flex-row flex-col space1">
        <div className="bg-prime-blue flex-1 h-[200px] flex items-center justify-center rounded-2xl p-7">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center">
              <img src={tel} alt="" />
            </div>
            <div className="">
              <h4 className="text-white ss-info-text">7740875942</h4>
            </div>
          </div>
        </div>
        <div className="bg-prime-blue flex-1 h-[200px] flex items-center justify-center rounded-2xl p-7">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center">
              <img src={sms} alt="" />
            </div>
            <div className=" overflow-hidden">
              <h4 className="text-white ss-info-text text-center truncate">
                examplecompany@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-prime-blue flex-1 h-[200px] flex items-center justify-center rounded-2xl p-7">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center">
              <img src={location} alt="" />
            </div>
            <div className="text-wrap">
              <h4 className="text-white  ss-info-text text-wrap text-center">
                Sandford RoadSandford, Wareham, Dorset BH20 7DD
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
