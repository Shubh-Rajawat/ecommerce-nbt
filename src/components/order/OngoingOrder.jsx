import React from "react";
import onOrder from "../../static/assets/onorder.png";
const OngoingOrder = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#F2F2F2] px-2 md:px-12 py-8 rounded-lg">
        <div className="grid grid-cols-2 bg-[#F2F2F2] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <img className="rounded-t-lg" src={onOrder} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Crispy Chicken
          </h5>

          <p className="mb-3 font-normal text-[#fff]  popins">
            Pollo Fritto 100g, insalata, mayo
          </p>
          <div className="flex justify-between">
            <p className="text-[#fff] popins">10,90</p>
            <p className="btn-red"> Re-order</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OngoingOrder;
