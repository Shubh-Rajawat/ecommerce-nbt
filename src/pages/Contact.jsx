import React from "react";
import contact from "../static/assets/contactimg.svg";
import Banner from "../components/common/Banner";
import b2 from "../static/assets/b2.png";
const bannerData = {
  title: "Contact Us",
  img: b2,
};
const Contact = () => {
  return (
    <>
      <Banner data={bannerData} />
      <div className="space1">
        <div className="x  w-full   mx-auto  overflow-hidden md:flex md:px-0 px-4 ss-container">
          <div className="ss-left-img flex-1 md:rounded-l-[50px] md:rounded-r-none rounded-[30px] overflow-hidden">
            <img
              src={contact}
              alt=""
              className=" w-full object-cover h-full "
            />
          </div>
          <div className=" flex-1 bg-[#F2F2F2]  flex flex-col items-center justify-center md:gap-3 mt-6 md:mt-0 py-6 px-11 md:rounded-r-[50px] md:rounded-l-none rounded-[30px] ">
            <div className="max-w-[480px] w-full  mx-auto  ">
              <h3 className=" lg:text-[40px] md:text-[32px] xl:text-[45px] 2xl:text-[50px] text-[22px]   text-center ramto">
                Contact <span className="text-[#D63348]">Us</span>
              </h3>
              <form>
                <div className="contact-name lg:mt-4 md:mt-4 mt-4">
                  <label
                    htmlFor="name"
                    className="ss-contact-label md:text-base  text-sm ramto"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-white w-full lg:h-14 md:h-11 h-12 rounded-3xl shadow-md pl-4 font-poppins mt-1  focus-visible:outline-none"
                    placeholder="Enter name"
                  />
                </div>
                <div className="contact-name lg:mt-4 md:mt-4  mt-4">
                  <label
                    htmlFor="email"
                    className="ss-contact-label md:text-base  text-sm ramto"
                  >
                    Email address
                  </label>

                  <input
                    type="text"
                    className="bg-white w-full lg:h-14 md:h-11 h-12 rounded-3xl shadow-md pl-4  font-poppins mt-1 focus-visible:outline-none"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="contact-name lg:mt-4 md:mt-4 mt-4">
                  <label
                    htmlFor="phone"
                    className="ss-contact-label md:text-base  text-sm ramto"
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="bg-white w-full lg:h-14 md:h-11 h-12 rounded-3xl shadow-md pl-4 font-poppins mt-1 focus-visible:outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="contact-name lg:mt-4 md:mt-4 mt-4">
                  <label
                    htmlFor="message"
                    className="ss-contact-label md:text-base  text-sm ramto"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="bg-white w-full  rounded-3xl shadow-md p-4 font-poppins mt-1 focus-visible:outline-none resize-none"
                    placeholder="Type message"
                    rows={3}
                  ></textarea>
                </div>
                <div className=" justify-center items-center flex lg:mt-6 mt-6">
                  <button className="bg-[#D63348] ramto  md:h-[50px] lg:h-[60px] h-[40px] md:w-56  w-28 rounded-[50px] text-white hover:bg-[#d63349dd]">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
