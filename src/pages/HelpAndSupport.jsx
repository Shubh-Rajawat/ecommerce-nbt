import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import help from "../static/assets/help.svg";
const faq = [1, 1, 1, 1, 1, 1];
const HelpAndSupport = () => {
  return (
    <>
      <BreadCrumb
        page={{
          title: "Help & support",
          path: "Home / Profile / Help & support",
          bg: "bg-[#F2F2F2]",
        }}
      />
      <div className=" ss-container space1">
        <div className="">
          <div className="md:grid grid-cols-2  md:mb-16 mb-9  gap-5 flex flex-col">
            <div className="">
              <div className="rounded-[50px] overflow-hidden mx-auto">
                <img src={help} alt="dd" />
              </div>
            </div>
            <div className=" md:ps-8 ps-0 flex items-center ">
              <div className="p text-justify text-[#777777] lg:text-[20px] text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-2  md:mb-16 mb-9  gap-5 flex flex-col-reverse ">
            <div className=" md:pe-8  ">
              <h2 className="text-2pl font-bold ramto mb-5">
                What is Lorem Ipsum?
              </h2>
              <p className=" text-justify text-[#777777] lg:text-[20px] text-[16px] mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className=" text-justify text-[#777777] lg:text-[20px] text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="">
              <div className="rounded-[50px] overflow-hidden mx-auto">
                <img src={help} alt="dd" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] ">
        <div className="ss-container py-14">
          <div className="">
            <h2 className="ramto text-[36px] mb-4">FAQ</h2>
          </div>
          <ul class="    grid md:grid-cols-2 grid-cols-1 gap-4">
            {faq.map((item, ind) => {
              return (
                <li>
                  <details class="group bg-white rounded-xl">
                    <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer duration-500 transition">
                      <svg
                        class="w-5 h-5 text-red-600 transition group-open:rotate-90 duration-500 font-bold"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                      <span>Why Lorem lpsum is dummy?</span>
                    </summary>

                    <article class="px-4 pb-4 ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed et ipsum sapien. Vestibulum molestie porttitor augue
                        vitae vulputate. Aliquam nec ex maximus, suscipit diam
                        vel, tristique tellus.
                      </p>
                    </article>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HelpAndSupport;
