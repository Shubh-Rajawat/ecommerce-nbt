import React from "react";
import { tableData } from "../../Data";

const OrderHistoryComp = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg inter ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[15px] text-[#FFFFFF]  bg-[#D63348] py-4  ">
            <tr className="py-4">
              <th scope="col" className="px-6 py-5 inter ">
                Sr. No.
              </th>
              <th scope="col" className="px-6 py-5">
                Image
              </th>
              <th scope="col" className="px-6 py-5">
                Order
              </th>
              <th scope="col" className="px-6 py-5">
                Order Total
              </th>
              <th scope="col" className="px-6 py-5">
                Item Qty.
              </th>
              <th scope="col" className="px-6 py-5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((res) => {
              return (
                <tr className="odd:bg-[#F2F2F2] odd:dark:bg-[#F2F2F2] even:bg-[#F2F2F2] even:dark:bg-[#F2F2F2] border-b border-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap  text-[#D63348]"
                  >
                    {res?.sr}.
                  </th>
                  <td className="px-6 py-4">
                    <img src={res?.img} />
                  </td>
                  <td className="px-6 py-4">{res?.order}</td>
                  <td className="px-6 py-4">{res?.total}</td>
                  <td className="px-6 py-4">{res?.qty}</td>

                  <td className="px-6 py-4 ">
                    <button
                      className={`border-hidden rounded-3xl py-2 w-[90%] text-white ${
                        res?.status === "Cancel"
                          ? "bg-[#D63348]"
                          : "bg-[#2E5AAC]"
                      }`}
                    >
                      {res?.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistoryComp;
