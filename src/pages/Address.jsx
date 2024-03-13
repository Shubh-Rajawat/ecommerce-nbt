import React, { useEffect, useState } from "react";

import office from "../static/assets/office.svg";
import { FaEdit } from "react-icons/fa";

import { ImLocation } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../redux/apiData/address";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import AddNewAddress from "../components/address/AddNewAddress";
import EditAddress from "../components/address/EditAddress";
import axios from "axios";
import { apiEndPoints } from "../redux/endPoints";
import Cookies from "js-cookie";

const Address = () => {
  let token = Cookies.get("token");
  const dispatch = useDispatch();
  const [border, setborder] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);

  const { addressData } = useSelector((state) => state.address);
  // fetch all addres
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  // add new address
  const handleAddNewAddressModalClose = () => {
    setOpenAddAddres(false);
  };
  // edit address
  const [addressToEdit, setaddressToEdit] = useState(null);
  const handleEdidClose = () => {
    setOpenEdit(false);
  };
  const [OpenAddAddres, setOpenAddAddres] = useState(false);
  // delete address
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteAddressId, setDeleteAddressId] = useState(null);
  const handleDeleteAddress = async () => {
    await axios
      .post(`${apiEndPoints.DELTE_ADDRESS}?token=${token}`, {
        id: deleteAddressId,
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.status === true) {
          dispatch(getAddress());
          setOpenDeleteModal(false);
        }
      })
      .catch((err) => console.log(err));
  };

  //

  return (
    <div>
      <div className=" md:py-5">
        <div className="ss-container  space1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            {addressData?.data?.length > 0 &&
              addressData?.data?.map((item, ind) => {
                return (
                  <div
                    className={`border  rounded-[20px] p-8 bg-white shadow-lg relative overflow-hidden ${
                      border === ind ? "border-[#D63348]" : ""
                    } `}
                    key={ind}
                    onClick={() => {
                      setborder(ind);
                    }}
                  >
                    <div className="absolute top-0 right-0 flex items-center gap-2">
                      <RiDeleteBin5Fill
                        color="#D63348"
                        size={22}
                        className="cursor-pointer"
                        onClick={() => {
                          setOpenDeleteModal(true);
                          setDeleteAddressId(item?.id);
                        }}
                      />
                      <div
                        className="  bg-[#D63348] p-3 rounded-es-xl cursor-pointer"
                        onClick={() => {
                          setOpenEdit(true);
                          setaddressToEdit(item);
                        }}
                      >
                        <FaEdit color="white" size={20} className="" />
                      </div>
                    </div>
                    <div className="">
                      <div className=" border-b-[1px] flex items-center gap-5">
                        <img src={office} alt="" className="mb-3" />
                        <span className="popins font-extrabold text-[28px]">
                          {item?.addressType}
                        </span>
                      </div>
                      <div className="mt-3">
                        <h3 className="popins font-semibold text-[24px] my-3">
                          John Doe
                        </h3>
                        {/* <div className=" flex items-center gap-4 my-3 popins text-[18px]">
                          <div className="">
                            <FaPhoneAlt className="text-[#D63348]" size={22} />
                          </div>
                          <span className="">+234 9011039271</span>
                        </div> */}
                        <div className=" flex items-center gap-4 popins text-[18px] my-2 ">
                          <div className="">
                            <ImLocation className="text-[#D63348]" size={22} />
                          </div>
                          <span className="">
                            {item?.streetAddress +
                              ", " +
                              item?.city +
                              ", " +
                              item?.state +
                              ", " +
                              item?.postalCode +
                              ", " +
                              item?.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6">
            <div
              className="bg-[#D63348]/5  rounded-2xl border border-dashed border-red-600 flex items-center justify-center cursor-pointer"
              onClick={() => {
                setOpenAddAddres(true);
              }}
            >
              <div className="flex text-[#D63348] font-bold items-center gap-3 py-4">
                <div className="">
                  <FaPlus className="" size={20} />
                </div>
                <span className="">Add New Shipping Address</span>
              </div>
            </div>
          </div>
          <div className="">
            <button className="btn-red">Continue</button>
          </div>
        </div>
      </div>

      {/* add new address modal */}
      <Modal
        isOpen={OpenAddAddres}
        onClose={() => handleAddNewAddressModalClose()}
        isCentered={true}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody className=" bg-[#F2F2F2]  rounded-xl ">
            <AddNewAddress
              handleAddNewAddressModalClose={handleAddNewAddressModalClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* edit address */}
      <Modal
        isOpen={openEdit}
        onClose={() => handleEdidClose()}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className=" bg-[#F2F2F2]  rounded-xl ">
            <EditAddress
              address={addressToEdit}
              handleEdidClose={handleEdidClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* delete address modal */}
      <Modal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className=" bg-[#F2F2F2]  rounded-xl ">
            <div className="text-center  p-8">
              <div className="mx-auto my-4 ">
                <p className=" text-lg  ramto my-2">Delete Address</p>
                <p className=" text-sm  popins my-2">
                  Are you sure want to delete this address?
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <button className="btn-red">Cancel</button>
                <button onClick={handleDeleteAddress} className="btn-blue">
                  Delete
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Address;
