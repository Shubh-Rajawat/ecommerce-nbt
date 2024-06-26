import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import { FaClipboardList, FaEdit, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { ImLocation } from "react-icons/im";

import SmallCard from "../components/profile/SmallCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/apiData/user";
import { Avatar } from "@chakra-ui/react";

const data = [
  {
    id: 1,
    name: "Orders",
    icon: <FaClipboardList className="text-[#D63348] text-3xl" />,
    path: "/order-details",
  },
  // {
  //   name: "Language",
  //   icon: <MdOutlineLanguage className="text-[#D63348] text-3xl" />,
  //   path: "",
  // },
  {
    id: 2,
    name: "Help & Support",
    icon: <TbHelpSquareRoundedFilled className="text-[#D63348] text-3xl" />,
    path: "/profile/help-and-support",
  },
  {
    id: 3,
    name: "Settings",
    icon: <IoMdSettings className="text-[#D63348] text-3xl" />,
    path: "/profile/settings",
  },
];
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, profileData } = useSelector(
    (state) => state.user
  );
  const [addrss, setAddress] = useState(
    profileData?.address?.streetAddress +
      " " +
      profileData?.address?.city +
      ", " +
      profileData?.address?.postalCode +
      ", " +
      profileData?.address?.state +
      ", " +
      profileData?.address?.country
  );
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  // console.log("profileData", profileData);
  return (
    <>
      <BreadCrumb
        page={{
          title: "Profile",
          path: "Home / Profile",
          bg: "bg-[#F2F2F2]",
        }}
      />
      <div className="w-[100%] ss-container px-1 py-5 md:py-12 flex justify-center">
        <div className="w-full md:w-[60%] lg:w-[55%] xl:w-[44%] h-full bg-[#F2F2F2] px-5  md:px-7 pt-10 rounded-3xl">
          <div
            className={`border  rounded-[20px] p-8 bg-white shadow-lg relative overflow-hidden`}
          >
            <div
              className=" absolute top-0 right-0 bg-[#D63348] p-4 rounded-es-xl cursor-pointer"
              onClick={() => {
                navigate("/edit-profile");
              }}
            >
              <FaEdit color="white" size={22} className="" />
            </div>
            <div className="">
              <Avatar
                size={"2xl"}
                src={profileData?.data?.image}
                alt=""
                className="rounded-full "
                style={{
                  border: "4px solid #D63348",
                }}
              />

              <div className="mt-3">
                <h3 className="popins font-semibold text-[20px]  md:text-[24px]">
                  {profileData?.data?.name}
                </h3>
                <div className=" my-2 popins text-16px md:text-[18px] text-[#777777]">
                  {profileData?.data?.email}
                </div>
                <div className=" flex items-center gap-4 my-6 popins text-[16px] md:text-[18px]">
                  <div className="bg-[#D63348] text-white rounded-full  ">
                    <FaPhoneAlt className="  m-2" size={22} />
                  </div>
                  <span className="text-[#777777]">
                    +{profileData?.data?.country_code}{" "}
                    {profileData?.data?.phone_number}
                  </span>
                </div>
                <div className=" flex items-center gap-4 popins text-[16px] md:text-[18px] my-2 ">
                  <div className="bg-[#D63348] text-white rounded-full">
                    <ImLocation
                      className="text-[18px] md:text-[20px] m-2"
                      size={22}
                    />
                  </div>
                  <span className="text-[#777777]">{addrss}</span>
                </div>
              </div>
            </div>
          </div>
          {data.map((item) => {
            return <SmallCard key={item.name} data={item} />;
          })}
          <div className="text-center mb-8">
            <button className="btn-red ">logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
