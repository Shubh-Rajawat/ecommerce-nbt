// import React from "react";
// import p2 from "../static/assets/p2.svg";
// import p3 from "../static/assets/p3.svg";
// import p4 from "../static/assets/p4.svg";
// import p6 from "../static/assets/p6.svg";
// import p1 from "../static/assets/p1.jpg";
import arrow from "../static/assets/arrow_r.svg";
import p5 from "../static/assets/about1.svg";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger sdsd dsf sdf  dsfgsdsd sdf", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
  { name: "Luger Burger", image: p5 },
];
const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="space1">
      <div className="ss-container ">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {data.map((item, index) => {
            return (
              <div
                className=" rounded-2xl p-4 shadow-1  duration-300 cursor-pointer"
                key={index}
                onClick={() => {
                  navigate("/info");
                }}
              >
                <div className=" rounded-2xl  overflow-hidden">
                  <img src={item?.image} alt="" />
                </div>
                <div className="flex mt-3 justify-between gap-3">
                  <div className=" overflow-hidden">
                    <h2 className="ss-head-one truncate">{item.name}</h2>
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
