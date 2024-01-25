import React, { useEffect, useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../redux/slices/toggleNavSlice";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { userSignup } from "../../redux/apiData/user";
import { Spinner } from "@chakra-ui/react";
import { userActions } from "../../redux/actions/userAuth";
import Cookies from "js-cookie";
const Signup = () => {
  const dispatch = useDispatch();
  const { userData, isLoading, isError } = useSelector((state) => state.user);
  const [value, setValue] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState(false);
  console.log("userData", userData);
  useEffect(() => {
    if (userData?.status === true) {
      Cookies.set("token", userData?.token);
      dispatch(userActions.setFieldsEmpty(true));
      dispatch(navAction.toggleLoginSignup());
    }
  }, [userData]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country_code: value,
    phone_number: "",
    image: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputError(false);
    if (!user.email || !user.name || !user.phone_number || !user.password) {
      setInputError("All fields required");
      return;
    }
    await dispatch(userSignup(user));
  };
  console.log("error", isError);
  return (
    <div className="bg-[#F2F2F2] md:px-16 p-8 ">
      {isError && (
        <div className="text-red-600 text-sm text-center">
          {isError.message}
        </div>
      )}
      {inputError && (
        <div className="text-red-600 text-sm text-center">{inputError}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="text-[#09405E] ramto text-[14px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              placeholder="Enter name"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="name" className="text-[#09405E] ramto text-[14px]">
              Pnone Number
            </label>
            <div className="flex bg-white ps-4 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] items-center">
              <PhoneInput
                international
                style={{ width: "40px", color: "black" }}
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={(e) => {
                  setValue(e);
                  setUser({
                    ...user,
                    country_code: e,
                  });
                  console.log("shubh", e);
                }}
              />
              <span className="text-sm text-[#000000]">{value}</span>
              <input
                type="number"
                name="phone"
                id="phone"
                value={`${user?.phone_number}`}
                onChange={(e) => {
                  console.log("value", value);
                  setUser({
                    ...user,
                    phone_number: `${e.target.value}`,
                  });
                }}
                placeholder="Enter phone number"
                autoComplete="off"
                className=" bg-white  ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
              />
            </div>
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              placeholder="Enter email"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
            />
          </div>
          <div className="flex flex-col items-start mt-4 relative">
            <label
              htmlFor="password"
              className="text-[#09405E] ramto text-[14px]"
            >
              Password
            </label>
            <input
              type={showPassword ? `text` : "password"}
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px]"
            />
            <div className=" text-red-600 absolute right-[10px] bottom-[10px]">
              {showPassword ? (
                <LuEyeOff
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <LuEye
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
            </div>
          </div>
          {/* <div className="">
          <span className="text-end text-[#D63348] text-[14px] cursor-pointer">
            Forgot password?
          </span>
        </div> */}
          <div className="flex items-center justify-center my-4">
            <button
              disabled={isLoading ? true : false}
              className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg align-middle"
            >
              <span>Sign-Up</span>
              {isLoading && (
                <span>
                  <Spinner size="sm" className="ms-2" />
                </span>
              )}
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-[#09405E] text-[16px]">
              Already have an account?
              <span
                className="text-[#D63348] cursor-pointer"
                onClick={() => {
                  dispatch(navAction.setShowUserTab("login"));
                  dispatch(userActions.setFieldsEmpty(true));
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
