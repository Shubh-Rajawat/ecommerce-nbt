import React from "react";
import logo from "../../static/assets/logo-white.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import DownloadIcon from "./DownloadIcon";

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

const Footer = () => {
  return (
    <footer className=" w-full relative bottom-0    bg-gradient-to-r from-[#104562] to-[#00253E]">
      <div className="ss-container flex flex-col md:flex-row justify-center md:justify-between text-white px-0"
        style={ {
          paddingLeft: 0,
          paddingRight: 0,
        } }
      >
        <div className="text-white px-10 py-16 lg:py-20 flex flex-col md:text-start text-center justify-center md:justify-normal  gap-5 bg-[#09405E] rounded-br-[50px]">
          <div className="w-48 md:w-64 mx-auto">
            <img src={ logo } alt="" />
          </div>
          <p className=" break-words popins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{ " " }
          </p>
          <div className="social-icon flex gap-3 justify-center md:justify-normal">
            <a href="" target="_blank" rel="noopener noreferrer">
              <BiLogoFacebook className="ico" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="ico" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-evenly md:items-center py-12 lg:py-20 w-full px-6 sm:px-8 md:px-12 lg:px-20 gap-8">
          <div className="text-4xl font-extrabold ramto">
            Download Our App
            <p className=" break-words text-sm font-normal mt-3 text-center md:text-start popins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{ " " }
            </p>
          </div>
          <DownloadIcon downloadApp={ downloadApp } />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
