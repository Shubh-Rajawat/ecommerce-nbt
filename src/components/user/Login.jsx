import React, { useEffect, useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { navAction } from "../../redux/slices/toggleNavSlice";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/userAuth";
import { userLogin } from "../../redux/apiData/user";
const Login = () => {
  const dispatch = useDispatch();
  const { empty, isError, isLoading, userData } = useSelector(
    (state) => state.user
  );
  console.log("empty", empty);
  const [inputError, setinputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    setinputError(false);
    console.log("User", user);
    if (!user.password || !user.email) {
      setinputError("All fields required");
    } else {
      dispatch(userLogin(user));
    }
  };
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (empty === true) {
      setuser({
        email: "",
        password: "",
      });
    }
  }, [empty]);

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
      <form onSubmit={handleLogin}>
        <div className="">
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
              Email address
            </label>
            <input
              value={user.email}
              type="text"
              name="email"
              id="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter email"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
            />
          </div>
          <div className="flex flex-col items-start mt-6 relative">
            <label
              htmlFor="password"
              className="text-[#09405E] ramto text-[14px]"
            >
              Password
            </label>
            <input
              value={user.password}
              type={showPassword ? `text` : "password"}
              name="password"
              id="password"
              onChange={(e) => handleChange(e)}
              placeholder="Enter password"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
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
          <div className="">
            <span
              className="text-end text-[#D63348] text-[14px] cursor-pointer"
              onClick={() => {
                dispatch(navAction.setShowForgotPasswordTab());
              }}
            >
              Forgot password?
            </span>
          </div>
          <div className="flex items-center justify-center my-4">
            <button
              type="submit"
              className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg tracking-widest"
              // onClick={() => {
              //   dispatch(navAction.setShowOtpTab());
              // }}
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-[#09405E] text-[16px]">
              You don't have an account yet?
              <span
                className="text-[#D63348] cursor-pointer"
                onClick={() => {
                  dispatch(navAction.setShowUserTab("signup"));
                  dispatch(userActions.setFieldsEmpty(true));
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
