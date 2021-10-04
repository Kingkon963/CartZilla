import { FC, useState } from "react";
import Image from "next/image";

import Price from "./Price";
import CartItem from "../interfaces/CartItem";

const MiniCartItemComponent: FC<{ item: CartItem; hoverEffect?: boolean }> = ({
  item,
  hoverEffect = true,
}) => {
  const [slide, setSlide] = useState(false);

  return (
    <>
      <div
        className="flex pb-2 border-b relative"
        onMouseEnter={() => setSlide(true)}
        onMouseLeave={() => setSlide(false)}
      >
        <div className="flex items-center justify-center h-full w-1/12 absolute left-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="text-primary"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <span
          className={`flex ${
            slide && hoverEffect ? "ml-6" : ""
          } w-11/12 duration-500`}
        >
          <div className="w-3/12 h-18">
            <Image
              src={item.img}
              width="64"
              height="64"
              alt="product"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col ml-1 w-9/12">
            <h6 className="cursor-pointer hover:text-primary duration-300">
              {item.title}
            </h6>
            <span>
              <Price price={item.price} />
              <span className="text-gray-500 text-sm ml-1">
                x{item.quantity}
              </span>
            </span>
          </div>
        </span>
      </div>
    </>
  );
};

export default MiniCartItemComponent;
