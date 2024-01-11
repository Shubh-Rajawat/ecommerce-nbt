import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import { IoIosArrowForward } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
const ProfileSettings = () => {
  const [opendel, setOpenDel] = useState(false);
  const [changePass, setOpenChangePass] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <BreadCrumb
        page={{
          title: "Profile",
          path: "Home / Profile / Settings",
          bg: "bg-[#F2F2F2]",
        }}
      />
      <div className=" ss-container px-1 py-5 md:py-12 flex justify-center">
        <div className="bg-[#F2F2F2] rounded-[50px] max-w-2xl p-11 w-[100%] gap-5  flex flex-col">
          <div
            className="bg-white rounded-[15px] flex items-center justify-between p-4 cursor-pointer"
            onClick={() => setOpenChangePass(true)}
          >
            <span className="font-bold">Change password</span>
            <IoIosArrowForward />
          </div>
          <div
            className="bg-white rounded-[15px] flex items-center justify-between p-4 font-bold cursor-pointer"
            onClick={() => setOpenDel(true)}
          >
            <span className="">Delete Account</span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      {/* delete account modal */}
      <Modal
        isOpen={opendel}
        onClose={() => setOpenDel(false)}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="text-center p-8 ">
              <div className=" flex flex-col  items-center">
                <div className="mx-auto my-4 ">
                  <div className="text-[40px] flex justify-center  text-red-600">
                    <FaTrashCan />
                  </div>
                  <p className=" text-lg  ramto my-2">Delete Account</p>
                  <p className=" text-sm  popins my-2">
                    Are you sure want to delete this item?
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="btn-red" onClick={() => setOpenDel(false)}>
                    Cancel
                  </button>
                  <button
                    onClick={() => setOpenDel(false)}
                    className="btn-blue"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* change password */}
      <Modal
        isOpen={changePass}
        onClose={() => setOpenChangePass(false)}
        isCentered={true}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody className=" bg-[#F2F2F2]  rounded-xl ">
            <div className=" p-6  ">
              <div className=" mt-5 rounded-b-[16px]   overflow-hidden ">
                <div className="text-center mb-8  ">
                  <h3 className="ramto text-[#000000] text-[24px] text-wrap">
                    Change password
                  </h3>
                  <p className="text-[#777777] text-center text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-col items-start mt-6 relative">
                  <label
                    htmlFor="password"
                    className="text-[#09405E] ramto text-[14px] mb-2"
                  >
                    Old Password
                  </label>
                  <input
                    // value={user.password}
                    type={showOldPassword ? `text` : "password"}
                    name="password"
                    id="password"
                    // onChange={(e) => handleChange(e)}
                    placeholder="Old password"
                    autoComplete="off"
                    className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
                  />
                  <div className=" text-red-600 absolute right-[10px] bottom-[15px] text-[20px]">
                    {showOldPassword ? (
                      <LuEyeOff
                        onClick={() => {
                          setShowOldPassword(!showOldPassword);
                        }}
                      />
                    ) : (
                      <LuEye
                        onClick={() => {
                          setShowOldPassword(!showOldPassword);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start mt-6 relative">
                  <label
                    htmlFor="password"
                    className="text-[#09405E] ramto text-[14px] mb-2"
                  >
                    New Password
                  </label>
                  <input
                    // value={user.password}
                    type={showNewPassword ? `text` : "password"}
                    name="password"
                    id="password"
                    // onChange={(e) => handleChange(e)}
                    placeholder="New password"
                    autoComplete="off"
                    className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
                  />
                  <div className=" text-red-600 absolute right-[10px] bottom-[15px] text-[20px]">
                    {showNewPassword ? (
                      <LuEyeOff
                        onClick={() => {
                          setShowNewPassword(!showNewPassword);
                        }}
                      />
                    ) : (
                      <LuEye
                        onClick={() => {
                          setShowNewPassword(!showNewPassword);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start mt-6 relative">
                  <label
                    htmlFor="password"
                    className="text-[#09405E] ramto text-[14px] mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    // value={user.password}
                    type={showConfirmPassword ? `text` : "password"}
                    name="password"
                    id="password"
                    // onChange={(e) => handleChange(e)}
                    placeholder="Confirm password"
                    autoComplete="off"
                    className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
                  />
                  <div className=" text-red-600 absolute right-[10px] bottom-[15px] text-[20px]">
                    {showConfirmPassword ? (
                      <LuEyeOff
                        onClick={() => {
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                      />
                    ) : (
                      <LuEye
                        onClick={() => {
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <button
                    type="submit"
                    className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg tracking-widest"
                    // onClick={() => {
                    //   dispatch(navAction.setShowOtpTab());
                    // }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileSettings;
