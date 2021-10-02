import * as React from "react";
import Image from "next/dist/client/image";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import keyGen from "../../utils/genKey";
import Price from "../Price";

const CartList: React.FC = () => {
  const listData = [
    {
      title: "Women Colorblock Sneakers",
      url: "/singleproduct",
      imgUrl: "https://cartzilla.createx.studio/img/shop/cart/01.jpg",
      price: 154.0,
      size: 8.5,
      color: "White & Blue",
      brand: null,
    },
    {
      title: "Women Colorblock Sneakers",
      url: "/singleproduct",
      imgUrl: "https://cartzilla.createx.studio/img/shop/cart/02.jpg",
      price: 154.0,
      size: 8.5,
      color: "White & Blue",
      brand: null,
    },
    {
      title: "Women Colorblock Sneakers",
      url: "/singleproduct",
      imgUrl: "https://cartzilla.createx.studio/img/shop/cart/03.jpg",
      price: 154.0,
      size: 8.5,
      color: "White & Blue",
      brand: null,
    },
    {
      title: "Women Colorblock Sneakers",
      url: "/singleproduct",
      imgUrl: "https://cartzilla.createx.studio/img/shop/cart/04.jpg",
      price: 154.0,
      size: 8.5,
      color: "White & Blue",
      brand: null,
    },
  ];

  return (
    <div className="w-full">
      {listData.map((data) => {
        return (
          <div className="flex w-full border-b my-5" key={keyGen()}>
            <div className="relative w-40">
              <Image alt="" src={data.imgUrl} width={240} height={240} />
            </div>
            <div className="flex-1 flex flex-col lg:flex-row my-5 lg:my-0 justify-between pl-5">
              <div className="flex flex-col">
                <h1 className="mb-2 primary-link">{data.title}</h1>
                {data.size && (
                  <span className="text-gray-500 text-sm">
                    Size: <span className="text-black">{data.size}</span>
                  </span>
                )}
                {data.brand && (
                  <span className="text-gray-500 text-sm">
                    Brand: <span className="text-black">{data.brand}</span>
                  </span>
                )}
                {data.color && (
                  <span className="text-gray-500 text-sm">
                    Color: <span className="text-black">{data.color}</span>
                  </span>
                )}
                <div className="mt-2">
                  <Price price={data.price} size="lg" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-medium">Quantity</h1>
                <input
                  className="border focus:border-primary focus:shadow-md duration-300 rounded-md w-32 outline-none px-3 py-2"
                  type="number"
                  name="quantity"
                  defaultValue={1}
                />
                <button className="text-primary text-sm  flex items-center">
                  <CancelOutlinedIcon className="text-base" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
