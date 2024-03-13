// import React from "react";
// import p2 from "../static/assets/p2.svg";
// import p3 from "../static/assets/p3.svg";
// import p4 from "../static/assets/p4.svg";
// import p6 from "../static/assets/p6.svg";
// import p1 from "../static/assets/p1.jpg";
import arrow from "../static/assets/arrow_r.svg";
import p5 from "../static/assets/about1.svg";
import { useNavigate } from "react-router-dom";
import Banner from "../components/common/Banner";
import b1 from "../static/assets/b1.png";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/apiData/products";
import { useEffect } from "react";
import { baseUrl } from "../redux/endPoints";

const bannerData = {
  title: "Menu",
  img: b1,
};
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  const para = {
    page: 1,
    limit: 100,
    search: "",
    reating: 3.5,
    from: 20,
    end: 20000.99,
  };
  useEffect(() => {
    dispatch(allProducts(para));
  }, []);

  console.log("products page", productData?.data);
  return (
    <>
      <Banner data={bannerData} />
      <div className="space1">
        <div className="ss-container ">
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
            {productData?.data &&
              productData?.data?.map((item, index) => {
                let slug = item?.name?.replaceAll(" ", "-").toLowerCase();
                return (
                  <div
                    className=" rounded-2xl p-4 shadow-1  duration-300 cursor-pointer flex flex-col justify-between"
                    key={index}
                    onClick={() => {
                      navigate(`/info/${item?.id}/${slug}`);
                    }}
                  >
                    <div className=" rounded-2xl  overflow-hidden">
                      <img src={`${baseUrl}/${item?.feature_img}`} alt="img" />
                    </div>
                    <div className="flex mt-3 justify-between gap-3">
                      <div className=" overflow-hidden">
                        <h2 className="ss-head-one ">{item.name}</h2>
                      </div>
                      <div className=" w-10  flex align-middle">
                        <img src={arrow} alt="arrow" className="w-2" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
