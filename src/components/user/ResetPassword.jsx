import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
const ResetPassword = (props) => {
  const disptch = useDispatch();
  const { isError, otpResp } = useSelector((state) => state.user);
  const { resetPasswordTab } = useSelector((state) => state.nav);
  console.log("resetPasswordTab", resetPasswordTab);
  console.log("otpResp", otpResp);
  const [changePass, setOpenChangePass] = useState(props);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    if (otpResp?.status === true) {
      disptch(navAction.setShowResetPassword(true));
    }
  }, [otpResp]);
  return (
    <div>
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
                    Reset password
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
    </div>
  );
};

export default ResetPassword;
