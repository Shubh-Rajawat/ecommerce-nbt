import React from "react";
import about1 from "../../static/assets/about1.svg";
import about2 from "../../static/assets/about2.svg";
const DeatailCard = () => {
  return (
    <div className="ss-container   w-full   mx-auto ">
      <div className=" md:flex flex-none md:mb-20 mb-11 space1">
        <div className="ss-about-img flex-1  rounded-[30px] overflow-hidden">
          <img src={about1} alt="" className="     w-full  h-full " />
        </div>
        <div className="flex-1 flex items-center md:mt-0 mt-6">
          <div className=" md:pl-12 p-0 ">
            <div className=" ">
              <h2 className=" ">
                <span className="text-black">Lorem Ipsum </span>
                <span className="text-red">Ambù</span>
              </h2>
              <p className="text-base mt-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col-reverse  md:mb-20">
        <div className="flex-1 flex items-center md:mt-0 mt-6">
          <div className=" md:pe-12 ">
            <div className=" ">
              <h2 className=" ">
                <span className="text-black">Lorem Ipsum </span>
                <span className="text-red">Ambù</span>
              </h2>
              <p className="text-base mt-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="ss-about-img flex-1  rounded-[30px] overflow-hidden">
          <img
            src={about2}
            alt=""
            className="     w-full object-cover h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default DeatailCard;
