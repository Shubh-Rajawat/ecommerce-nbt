import React from "react";
import p2 from "../static/assets/p2.svg";
import p3 from "../static/assets/p3.svg";
import p4 from "../static/assets/p4.svg";
import p5 from "../static/assets/about1.svg";
import p6 from "../static/assets/p6.svg";
import p1 from "../static/assets/p1.jpg";
import arrow from "../static/assets/arrow_r.svg";
const data = [
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
];
const Products = () => {
  return (
    <div className=" mt-24">
      <div className="ss-container ">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {data.map((item, index) => {
            return (
              <div
                className=" rounded-2xl p-4 shadow-1  duration-300 cursor-pointer"
                key={index}
              >
                <div className=" rounded-2xl  overflow-hidden">
                  <img src={item?.image} alt="" />
                </div>
                <div className="flex mt-3 justify-between gap-3">
                  <div className="">
                    <h2 className="ss-head-one">Luger Burgers</h2>
                  </div>
                  <div className=" w-10  flex align-middle">
                    <img src={arrow} alt="arrow" className="w-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
