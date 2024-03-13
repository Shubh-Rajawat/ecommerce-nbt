import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress, getAddress } from "../../redux/apiData/address";
import axios from "axios";
import Cookies from "js-cookie";
import { apiEndPoints } from "../../redux/endPoints";

const AddNewAddress = (props) => {
  const dispatch = useDispatch();
  let token = Cookies.get("token");

  //   const [OpenAddAddres, setOpenAddAddres] = useState(false);

  console.log(props);
  const [address, setAddAddress] = useState({
    name: "",
    mobile: "",
    addressType: "home",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleAddAddress = async (e) => {
    e.preventDefault();
    // await axios
    //   .post(`${apiEndPoints.ADD_NEW_ADDRESS}?token=${token}`, address)
    //   .then((res) => {
    //     console.log(res);
    //     if (res?.data?.status === true) {
    //       dispatch(getAddress());
    //       props?.handleAddNewAddressModalClose();
    //     }
    //   })
    //   .catch((err) => console.log(err));
    dispatch(addNewAddress(address))
      .then(() => {
        dispatch(getAddress());
        props?.handleAddNewAddressModalClose();
      })
      .then(() => {
        console.log();
      });
  };
  return (
    <div className=" p-6  ">
      <div className=" mt-5 rounded-b-[16px]   overflow-hidden ">
        <div className="text-center mb-8  ">
          <h3 className="ramto text-[#000000] text-[24px] text-wrap">
            Add New
            <span className="red">Address</span>
          </h3>
        </div>
      </div>
      <div className=" ">
        <form
          onSubmit={(e) => {
            handleAddAddress(e);
          }}
        >
          {/* <div className="flex flex-col items-start mt-6 relative">
            <label
              htmlFor="name"
              className="text-[#09405E] ramto text-[14px] mb-2"
            >
              Full Name
            </label>
            <input
              value={address.name}
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setAddAddress({ ...address, name: e.target.value });
              }}
              placeholder="Enter Full Name"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
            />
          </div>
          <div className="flex flex-col items-start mt-6 relative">
            <label
              htmlFor="mobile"
              className="text-[#09405E] ramto text-[14px] mb-2"
            >
              Mobile Number
            </label>
            <input
              value={address.mobile}
              type="number"
              name="Mobile"
              id="Mobile"
              onChange={(e) => {
                setAddAddress({ ...address, mobile: e.target.value });
              }}
              placeholder="Enter Mobile Number"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
            />
          </div> */}
          <div className="flex-1 flex-col items-start mt-6 relative">
            <label
              htmlFor="street"
              className="text-[#09405E] ramto text-[14px] mb-2"
            >
              Street Address
            </label>
            <input
              value={address.streetAddress}
              type="text"
              name="street"
              id="street"
              onChange={(e) => {
                setAddAddress({ ...address, streetAddress: e.target.value });
              }}
              placeholder="Enter Street Name"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
            />
          </div>
          <div className="sm:flex gap-2">
            <div className="flex-1 flex-col items-start mt-6 relative">
              <label
                htmlFor="type"
                className="text-[#09405E] ramto text-[14px] mb-2"
              >
                Address Type
              </label>

              <select
                value={address.addressType}
                name="type"
                id="type"
                className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] cursor-pointer"
                onChange={(e) => {
                  setAddAddress({ ...address, addressType: e.target.value });
                }}
              >
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>
            </div>
            <div className="flex-1 flex-col items-start mt-6 relative">
              <label
                htmlFor="city"
                className="text-[#09405E] ramto text-[14px] mb-2"
              >
                City
              </label>
              <input
                value={address.city}
                type="text"
                name="city"
                id="city"
                onChange={(e) => {
                  setAddAddress({ ...address, city: e.target.value });
                }}
                placeholder="Enter City"
                autoComplete="off"
                className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
              />
            </div>
          </div>
          <div className="sm:flex gap-2">
            <div className="flex-1 flex-col items-start mt-6 relative">
              <label
                htmlFor="state"
                className="text-[#09405E] ramto text-[14px] mb-2"
              >
                State
              </label>
              <input
                value={address.state}
                type="text"
                name="state"
                id="state"
                onChange={(e) => {
                  setAddAddress({ ...address, state: e.target.value });
                }}
                placeholder="Enter state"
                autoComplete="off"
                className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
              />
            </div>
            <div className="flex-1 flex-col items-start mt-6 relative">
              <label
                htmlFor="postal"
                className="text-[#09405E] ramto text-[14px] mb-2"
              >
                Postal Code
              </label>
              <input
                value={address.postalCode}
                type="number"
                name="postal"
                id="postal"
                onChange={(e) => {
                  setAddAddress({ ...address, postalCode: e.target.value });
                }}
                placeholder="Enter Postal Code"
                autoComplete="off"
                className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
              />
            </div>
          </div>
          <div className="flex-1 flex-col items-start mt-6 relative">
            <label
              htmlFor="country"
              className="text-[#09405E] ramto text-[14px] mb-2"
            >
              Country
            </label>
            <input
              value={address.country}
              type="text"
              name="country"
              id="country"
              onChange={(e) => {
                setAddAddress({ ...address, country: e.target.value });
              }}
              placeholder="Enter Country"
              autoComplete="off"
              className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] selection:text-current"
            />
          </div>
          <div className="flex items-center justify-center my-4">
            <button
              type="submit"
              className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg tracking-widest"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAddress;
