import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navAction } from "../../redux/slices/toggleNavSlice";
import VerticalNav from "./VerticalNav";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";

const HorizontalNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useSelector((state) => state.user);
  const [width, setWidth] = useState(window.innerWidth > 991);
  const [token, setToken] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  let tokn = Cookies.get("token");
  useEffect(() => {
    if (tokn) {
      setToken(true);
    }
  }, [tokn, token, userData]);
  console.log(token);
  const { showNav } = useSelector((state) => state.nav);
  const navClose = () => {
    dispatch(navAction.toggleNav());
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth > 991);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth > 991);
      });
    };
  }, []);

  const showToast = () => {
    toast({
      description: `Login required`,
      status: "warning",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <div
      className={` w-full h-[50px] overflow-hidden bg-transparent z-20 absolute`}
    >
      {width ? (
        <div
          className={` relative h-[50px] bg-[#09405E] w-full flex items-center ${
            showNav
              ? "   top-0  transition-all duration-[500ms]  ease-in-out"
              : "  -top-[50px] transition-all duration-[500ms]  ease-in-out"
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
                {token ? (
                  <Link to="/notification">Notification</Link>
                ) : (
                  <Link onClick={showToast}>Notification</Link>
                )}
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
                {token ? (
                  <Link to="/cart">My Cart</Link>
                ) : (
                  <Link onClick={showToast}>My Cart</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <VerticalNav onClose={navClose} onOpen={onOpen} isOpen={showNav} />
      )}
    </div>
  );
};

export default HorizontalNav;
