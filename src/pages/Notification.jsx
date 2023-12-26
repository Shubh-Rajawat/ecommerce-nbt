import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const notify = [1, 1, 1, 1, 1, 1, 1];
const Notification = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="ss-container  py-5">
        <div className="space1 flex flex-col  max-w-[800px] w-[100%]">
          {notify &&
            notify?.map((item, ind) => {
              return (
                <div className="bg-white rounded-[20px] flex gap-3 mb-4 py-4 ps-3">
                  <div className="">
                    <IoIosCheckmarkCircleOutline className="text-red-600  text-2nl" />
                  </div>
                  <div className="">
                    <h4 className="text-1nl">Your order is completed!</h4>
                    <span className="text-sm text-[#777777]">
                      5 minutes ago
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
