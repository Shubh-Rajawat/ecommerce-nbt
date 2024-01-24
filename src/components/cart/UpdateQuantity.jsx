import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItemQty } from "../../redux/apiData/cart";

const UpdateQuantity = (props) => {
  const dispatch = useDispatch();
  const { isUpdateLoading, isUpdateError } = useSelector((state) => state.cart);
  const [updateqty, setupdateqty] = useState(props?.qty);

  const handleQty = () => {
    dispatch(updateCartItemQty({ cart_id: props?.id, quantity: updateqty }));
  };
  return (
    <div>
      <div className=" mt-5   flex gap-4">
        <div className="bg-[#09405E] rounded-[50px] flex py-1">
          <button
            className=" text-2xl px-3 text-white"
            onClick={() => {
              setupdateqty(updateqty - 1);
            }}
          >
            <FaMinus />
          </button>
          <input
            type="text"
            name=""
            value={updateqty}
            id=""
            className=" w-5 text-2xl font-semibold   text-red-600 bg-transparent "
          />
          <button
            className=" text-2xl px-2 text-white "
            onClick={() => {
              setupdateqty(updateqty + 1);
            }}
          >
            <FaPlus />
          </button>
        </div>

        <button
          className="border-solid  bg-[#D63348] text-white popins font-semibold hover:bg-[#d63349e5] rounded-[30px] px-4 flex items-center justify-center gap-1"
          onClick={handleQty}
          disabled={isUpdateLoading ? true : false}
        >
          <span>Update</span>
        </button>
      </div>
    </div>
  );
};

export default UpdateQuantity;
