import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navAction } from "../../redux/slices/toggleNavSlice";

const HorizontalNav = () => {
  const dispatch = useDispatch();
  const { showNav } = useSelector((state) => state.nav);
  const navClose = () => {
    dispatch(navAction.toggleNav());
  };
  return (
    <div
      className={` w-full h-[50px] overflow-hidden bg-transparent z-20 absolute`}
    >
      <div
        className={` relative h-[50px] bg-[#09405E] w-full flex items-center ${
          showNav
            ? "   top-0  transition-all duration-[800ms]  ease-in-out"
            : "  -top-[50px] transition-all duration-[800ms]  ease-in-out"
        }     `}
      >
        <div className="ss-container  ">
          <ul className="flex items-center justify-between">
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/notification">Notification</Link>
            </li>
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/products">Menu</Link>
            </li>
            <li
              className="text-white ramto hover:text-yellow-500 cursor-pointer transition-colors"
              onClick={navClose}
            >
              <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNav;
