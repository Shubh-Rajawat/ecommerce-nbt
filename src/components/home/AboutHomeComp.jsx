import React from "react";

const AboutHomeComp = ({ aboutHomeComp }) => {
  console.log("sedrsedrsd", aboutHomeComp);
  return (
    <>
      <div
        className={`sks-about-home relative ${aboutHomeComp[0]?.background}`}
      >
        <div className="ss-container   flex place-content-center">
          <div className="  text-center  max-w-[800px] py-24">
            <h1
              className={`text-2xl popins font-extrabold lg:text-3xl xl:text-4xl 2xl:text-5xl ${aboutHomeComp[0]?.aboutColor}`}
            >
              {aboutHomeComp[0]?.about}
              <span
                className={`ramto ${aboutHomeComp[0]?.aboutheadColor} `}
                // style={{ color: `${aboutHomeComp[0]?.aboutheadColor}` }}
              >
                &nbsp;
                {aboutHomeComp[0]?.abouthead}
              </span>
            </h1>
            <p className={`popins py-4 ${aboutHomeComp[0]?.paraColor}`}>
              {aboutHomeComp[0]?.para1}
            </p>
            <p className={`popins  ${aboutHomeComp[0]?.paraColor}`}>
              {aboutHomeComp[0]?.para2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeComp;
