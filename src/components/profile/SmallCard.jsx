import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white my-7 shadow-lg rounded-xl text-[20px] py-5 px-2 flex items-center justify-between cursor-pointer"
      onClick={() => {
        navigate(`${data?.path}`);
      }}
    >
      <div className="flex items-center gap-2 popins text-[18px] font-semibold">
        {data.icon}
        {data?.name}
      </div>
      <div className="">
        <FaChevronRight className="text-[#D63348]" />
      </div>
    </div>
  );
};

export default SmallCard;
