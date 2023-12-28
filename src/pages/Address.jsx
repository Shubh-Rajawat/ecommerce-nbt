import React, { useState } from "react";
import home from "../static/assets/home.svg";
import office from "../static/assets/office.svg";
import { FaEdit } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import Modal from "../components/modal/Modal";
const data = [1, 1, 1, 1];
const Address = () => {
  const [border, setborder] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div>
      <div className=" md:py-5">
        <div className="ss-container  space1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            {data &&
              data?.map((item, ind) => {
                return (
                  <div
                    className={`border  rounded-[20px] p-8 bg-white shadow-lg relative overflow-hidden ${
                      border === ind ? "border-[#D63348]" : ""
                    } `}
                    key={ind}
                    onClick={() => {
                      setborder(ind);
                    }}
                  >
                    <div
                      className=" absolute top-0 right-0 bg-[#D63348] p-4 rounded-es-xl cursor-pointer"
                      onClick={() => setOpenEdit(true)}
                    >
                      <FaEdit color="white" size={22} className="" />
                    </div>
                    <div className="">
                      <div className=" border-b-[1px] flex items-center gap-5">
                        <img src={office} alt="" className="mb-3" />
                        <span className="popins font-extrabold text-[28px]">
                          Office
                        </span>
                      </div>
                      <div className="mt-3">
                        <h3 className="popins font-semibold text-[24px] my-3">
                          John Doe
                        </h3>
                        <div className=" flex items-center gap-4 my-3 popins text-[18px]">
                          <div className="">
                            <FaPhoneAlt className="text-[#D63348]" size={22} />
                          </div>
                          <span className="">+234 9011039271</span>
                        </div>
                        <div className=" flex items-center gap-4 popins text-[18px] my-2 ">
                          <div className="">
                            <ImLocation className="text-[#D63348]" size={22} />
                          </div>
                          <span className="">
                            No 15 Test Street London, UK, SE1 1AB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6">
            <div className="bg-[#D63348]/5  rounded-2xl border border-dashed border-red-600 flex items-center justify-center cursor-pointer">
              <div className="flex text-[#D63348] font-bold items-center gap-3 py-4">
                <div className="">
                  <FaPlus className="" size={20} />
                </div>
                <span className="">Add New Shipping Address</span>
              </div>
            </div>
          </div>
          <div className="">
            <button className="btn-red">Continue</button>
          </div>
        </div>
      </div>
      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <div className="text-center  ">
          <div className="mx-auto my-4 ">
            {/* <div className="text-[40px] flex justify-center  text-red-600">
              <FaEdit />
            </div> */}
            <p className=" text-lg  ramto my-2">Edit Address</p>
            <p className=" text-sm  popins my-2">
              Are you sure want to Edit this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn-red">Cancel</button>
            <button onClick={() => setOpenEdit(false)} className="btn-blue">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Address;
