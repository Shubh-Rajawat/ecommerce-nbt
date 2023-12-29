import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const VerticalNav = (props) => {
  const { isOpen, onOpen, onClose } = props;
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
                  <Link
                    className="hover:text-yellow-500 cursor-pointer"
                    to="/notification"
                  >
                    Notification
                  </Link>
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
                  <Link
                    className="hover:text-yellow-500 cursor-pointer"
                    to="/cart"
                  >
                    My Cart
                  </Link>
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
