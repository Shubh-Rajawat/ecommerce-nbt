const CartSkull = () => {
  return (
    <div>
      <div className="ss-container  space1 animate-pulse">
        <div className="grid grid-cols-7 gap-8">
          <div className=" col-span-4 ">
            <div className="bg-[#d1d0d0]  flex gap-6 rounded-2xl p-8 relative overflow-hidden mb-4">
              <div className="flex items-center justify-center w-full h-48 bg-gray-300  sm:w-96  rounded-xl">
                <svg
                  className="w-10 h-10 text-gray-200 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className=" flex-1 ">
                <h1 className=" h-4 bg-gray-200 rounded-full  w-48 mb-4"></h1>
                <h1 className=" h-4 bg-gray-200 rounded-full  w-48 mb-4"></h1>

                <div className="flex justify-between">
                  <h3 className="text-3pl h-3 w-24 rounded-full  "></h3>
                  <h4 className="text-1pl"></h4>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3">
            <div className="">
              <h1 className=" h-8 bg-gray-200 rounded-full  w-48 mb-4"></h1>
              <div className="my-3 rounded-lg  overflow-hidden flex justify-end items-center px-6 bg-[#F2F5F7]"></div>

              <div className="">
                <h1 className=" my-4  h-8 w-48 bg-gray-200 rounded-full "></h1>
                <h1 className=" my-4  h-4 w-32 bg-gray-200 rounded-full "></h1>
              </div>

              <div className=" mt-5">
                <button className="  h-8 w-20 bg-gray-200 rounded-full "></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkull;
