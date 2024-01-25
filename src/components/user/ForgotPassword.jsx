import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "../../redux/apiData/user";
import { navAction } from "../../redux/slices/toggleNavSlice";
import { userActions } from "../../redux/actions/userAuth";

const ForgotPassword = () => {
  const { empty, isError, isLoading, userData, otpEmail } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [inputError, setinputError] = useState(false);
  console.log("isError", isError, otpEmail);
  const sendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      setinputError("Please enter your email");
      return;
    } else {
      dispatch(sendOtp(email));
      dispatch(userActions.setOtpEmail(email));
    }
  };
  useEffect(() => {
    if (userData && userData.status === true) {
      dispatch(navAction.setShowOtpTab());
    }
  }, [userData]);

  // console.log(" sukhij", userData);
  return (
    <section className=" text-center pt-5">
      <div className="text-center   md:px-16 px-8 py-4">
        <h3 className="ramto text-[#000000] text-[24px] text-wrap">
          Forgot Password?
        </h3>
        <p className="text-[#777777] text-center text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <form onSubmit={sendOTP}>
        <div className="py-8 bg-[#F2F2F2] md:px-16 px-8">
          {isError && (
            <div className="text-red-600 text-sm text-center">
              {isError?.message}
            </div>
          )}
          <div className="flex flex-col items-start px-8">
            <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setinputError(false);
                setemail(e.target.value);
              }}
              placeholder="Enter email"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
            />
          </div>
          <div className="text-center py-3">
            <button className=" rounded-[30px] text-white ramto bg-[#D63348] text-[16px] px-6 tracking-[2px] hover:text-[#D63348] hover:bg-white border border-[#D63348] transition-all duration-200">
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
