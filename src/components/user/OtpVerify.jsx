import React, { useEffect, useState } from "react";

import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../redux/apiData/user";
const OtpVerify = () => {
  const dispatch = useDispatch();
  const { otpEmail } = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [timer, setTimer] = useState(120);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer < 0) setTimer(0);
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onOtpSubmit = (e) => {
    e.preventDefault();
    setOtpError(false);
    if (otp.length < 6) {
      setOtpError("Invalid otp");
    } else {
      dispatch(verifyOtp({ email: otpEmail, otp: Number(otp) }));
    }
  };

  return (
    <section>
      <div className=" text-center">
        <div className="text-center   md:px-16 px-8 py-3">
          <h3 className="ramto text-[#000000] text-[24px] text-wrap">
            Verification
          </h3>
          <p className="text-[#777777] text-center text-[14px]">
            We sent verification OTP to your email
          </p>
        </div>
        <div className="py-6 bg-[#F2F2F2] md:px-16 px-8">
          <form onSubmit={onOtpSubmit}>
            <div className="pb-4">
              <h4 className="text-blue text-center text-[16px] ramto">
                Verify OTP
              </h4>
              <div className="text-red-700 text-sm ">{otpError}</div>
            </div>
            <HStack>
              <PinInput
                otp
                value={otp}
                onChange={(e) => {
                  setOtp(e);
                  // console.log(otp);
                }}
              >
                <PinInputField className="text-red-700 br-red " />
                <PinInputField className="text-red-700 br-red " />
                <PinInputField className="text-red-700 br-red " />
                <PinInputField className="text-red-700 br-red " />
                <PinInputField className="text-red-700 br-red " />
                <PinInputField className="text-red-700 br-red " />
              </PinInput>
            </HStack>
            <div className="text-center py-3">
              <button className=" rounded-[30px] text-white ramto bg-[#D63348] text-[16px] px-4 tracking-[2px] hover:text-[#D63348] hover:bg-white border border-[#D63348] transition-all duration-200">
                Verify
              </button>
            </div>
          </form>

          <div className="">
            <span className="text-[#09405E] text-sm">
              Didn't receive the OTP?{" "}
              {timer === 0 ? (
                <span className="text-[#D63348] cursor-pointer"> Resend</span>
              ) : (
                <span
                  className={`${
                    timer < 30 ? `text-[#D63348]` : `text-[#131313]`
                  } text-[14px] tracking-wider`}
                >
                  {Math.floor(timer / 60) + ":" + Math.floor(timer % 60) + "s"}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;
