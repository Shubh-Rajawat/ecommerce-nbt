import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useToast,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const VerticalNav = (props) => {
  const { isOpen, onOpen, onClose } = props;
  const { userData } = useSelector((state) => state.user);
  const [token, setToken] = useState(false);
  const toast = useToast();
  let tokn = Cookies.get("token");
  useEffect(() => {
    if (tokn) {
      setToken(true);
    }
  }, [tokn, token, userData]);
  // console.log(token);

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
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
        }}
      >
        <DrawerContent className="py-5 rounded-l-[30px] ">
          <DrawerHeader>
            <div className="text-end">
              <button className="bg-red-500 rounded-full p-1 text-white">
                <IoMdClose onClick={props?.onClose} />
              </button>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div className="">
              <ul className="flex items-ce justify-between flex-col gap-8">
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  <Link className="hover:text-yellow-500 cursor-pointer" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  <Link
                    className="hover:text-yellow-500 cursor-pointer"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  <Link
                    className="hover:text-yellow-500 cursor-pointer"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  {token ? (
                    <Link
                      className="hover:text-yellow-500 cursor-pointer"
                      to="/notification"
                    >
                      Notification
                    </Link>
                  ) : (
                    <Link
                      className="hover:text-yellow-500 cursor-pointer"
                      onClick={showToast}
                    >
                      Notification
                    </Link>
                  )}
                </li>
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  <Link
                    className="hover:text-yellow-500 cursor-pointer"
                    to="/products"
                  >
                    Menu
                  </Link>
                </li>
                <li
                  className="text-[#09405E] ramto  transition-colors"
                  onClick={props?.onClose}
                >
                  {token ? (
                    <Link
                      to="/cart"
                      className="hover:text-yellow-500 cursor-pointer"
                    >
                      My Cart
                    </Link>
                  ) : (
                    <Link
                      className="hover:text-yellow-500 cursor-pointer"
                      onClick={showToast}
                    >
                      My Cart
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default VerticalNav;
