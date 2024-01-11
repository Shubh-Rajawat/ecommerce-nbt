import React from "react";
import DeatailCard from "../components/about/DeatailCard";
import InfoCards from "../components/about/InfoCards";
import Banner from "../components/common/Banner";
import b2 from "../static/assets/b2.png";
const bannerData = {
  title: "About Amburger",
  img: b2,
};
const About = () => {
  return (
    <>
      <Banner data={bannerData} />
      <div>
        <DeatailCard />
        <InfoCards />
      </div>
    </>
  );
};

export default About;
