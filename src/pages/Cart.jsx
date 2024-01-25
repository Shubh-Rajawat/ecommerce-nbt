import React, { useEffect, useState } from "react";
import p1 from "../static/assets/c1.svg";
import coin from "../static/assets/conin.svg";

import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from "../components/cart/EmptyCart";
import CartSkull from "../components/cart/CartSkull";
import Modal from "../components/modal/Modal";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getCart } from "../redux/apiData/cart";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { cartActions } from "../redux/actions/cart";
import UpdateQuantity from "../components/cart/UpdateQuantity";
const Cart = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [opendel, setOpenDel] = useState(false);
  const [itemId, setitemId] = useState();
  const { cartData, isLoading, deleteResp, updateQtyresp } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(cartActions.setDeleteResp());
    dispatch(getCart(data));
  }, [updateQtyresp]);
  let data = { limit: 6, page: 1 };
  useEffect(() => {
    dispatch(getCart(data, false));
    // delete toast
    if (deleteResp?.status === true || deleteResp?.status === false) {
      toast({
        description:
          deleteResp?.status === true
            ? `Item Removed Successfully`
            : `Error Occured!`,
        status: deleteResp?.status === true ? "success" : "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(cartActions.setDeleteResp());
  }, [deleteResp]);

  useEffect(() => {
    if (updateQtyresp?.status === true || updateQtyresp?.status === false) {
      toast({
        description:
          updateQtyresp?.status === true
            ? `Quantity Updated`
            : `Error Occured!`,
        status: updateQtyresp?.status === true ? "success" : "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [updateQtyresp]);
  const deleteItem = () => {
    // setisSkip(true);
    dispatch(deleteCartItem({ id: itemId }));
    setOpenDel(false);
  };

  return (
    <div>
      {isLoading ? (
        <CartSkull />
      ) : (
        <>
          {cartData?.data?.length ? (
            <div className="ss-container  space1">
              <div className="grid lg:grid-cols-7 md:grid-cols-5 lg:gap-8 gap-4">
                <div className="col-span-7  md:col-span-3 lg:col-span-4 ">
                  {cartData?.data.length > 0 &&
                    cartData?.data?.map((item, ind) => {
                      return (
                        <div
                          key={ind}
                          className="bg-[#F2F2F2]  flex gap-6 rounded-2xl 2xl:p-8 lg:p-6 p-4 relative overflow-hidden mb-4 xl:flex-row flex-col"
                        >
                          <div className=" overflow-hidden flex-1 mx-auto max-h-60 grid place-content-center rounded-2xl">
                            <img
                              src={item?.product_id?.image}
                              alt=""
                              className="rounded-2xl"
                            />
                          </div>
                          <div className=" flex-1 ">
                            <h1 className="text-2cl">
                              {item?.product_id?.name}
                            </h1>
                            <p className="text-5pl   my-2">
                              {item?.product_id?.description}
                            </p>
                            <div className="flex justify-between">
                              <h3 className="text-3pl">Large</h3>
                              <h4 className="text-3cl  red">
                                {(
                                  item?.product_id?.price * item?.quantity
                                ).toFixed(2)}
                              </h4>
                            </div>
                            {/* <h3 className="text-3cl red my-2">1090</h3> */}
                            <UpdateQuantity
                              qty={item?.quantity}
                              id={item?._id}
                              key={item?._id}
                            />
                          </div>
                          <div className=" absolute top-0 right-0 bg-[#D63348] p-3 rounded-es-xl ">
                            <FaTrashAlt
                              color="white"
                              size={18}
                              className="cursor-pointer"
                              onClick={() => {
                                setitemId(item?._id);
                                setOpenDel(true);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className=" col-span-7 md:col-span-2 lg:col-span-3">
                  <div className="">
                    <h1 className="text-3cl ">Promo Code</h1>
                    <div className="my-3 border-dotted border-2 rounded-lg border-black overflow-hidden flex justify-between items-center px-6 bg-[#F2F5F7]">
                      <div className="w-full">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" h-12 bg-transparent w-full focus-visible:outline-none"
                          placeholder="Enter coupon code here"
                        />
                      </div>
                      <div className="">
                        <button className="text-7pl">Apply</button>
                      </div>
                    </div>
                    <div className="my-6 rounded-lg bg-[#F2F5F7] p-5">
                      <label htmlFor="points" className="text-8pl">
                        <input
                          type="checkbox"
                          name="points"
                          id="points"
                          className=" mr-3"
                        />
                        Pay Using Points
                      </label>
                      <div className="flex  mt-2">
                        <span className="flex items-center font-bold">
                          Available Balance:
                          <span className="mx-1">
                            <img src={coin} alt="" />
                          </span>
                        </span>
                        <span className="font-bold text-red-700">200 pts</span>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="text-3cl  lg:my-4 my-2">Delivery</h1>
                      <div className="flex flex-col lg:gap-3 gap-1">
                        <label
                          htmlFor="pickup"
                          className=" text-xl font-semibold"
                        >
                          <input
                            type="radio"
                            name="del"
                            id="pickup"
                            className="mr-2"
                          />
                          Pick Up
                        </label>
                        <label
                          htmlFor="free_delivery"
                          className=" text-xl font-semibold"
                        >
                          <input
                            type="radio"
                            name="del"
                            id="free_delivery"
                            className="mr-2"
                          />
                          Free Delivery
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between lg:my-4 my-2">
                      <span className="font-bold text-xl text-[#777777]">
                        Sub Total
                      </span>
                      <span className="text-1pl">600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-xl">
                        Total <span className="text-[#777777]">(2 items)</span>
                      </span>
                      <span className="text-1pl">600</span>
                    </div>
                    <div className=" mt-5">
                      <button
                        className="btn-red "
                        onClick={() => {
                          navigate("/address");
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </>
      )}

      <Modal open={opendel} onClose={() => setOpenDel(false)}>
        <div className="text-center p-8 ">
          <div className="mx-auto my-4 ">
            <div className="text-[40px] flex justify-center  text-red-600">
              <FaTrashCan />
            </div>
            <p className=" text-lg  ramto my-2">Delete Item</p>
            <p className=" text-sm  popins my-2">
              Are you sure want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setOpenDel(false)} className="btn-red">
              Cancel
            </button>
            <button onClick={deleteItem} className="btn-blue">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
