import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Price from "./Price";
import Product from "../interfaces/Product";
import CartItem from "../interfaces/CartItem";
import { CartContext } from "../context/CartContext";
import keyGen from "../utils/genKey";
import useWindowSize from "../hooks/useWindowSize";

const CartIcon: FC<{ total: number }> = ({ total }) => {
  return (
    <div
      className="rounded-full p-3 flex items-center justify-center relative
   bg-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      {total !== 0 && (
        <>
          <span className="animate-ping absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 text-xs flex justify-center items-center"></span>
          <span className="absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 text-xs flex justify-center items-center">
            {total}
          </span>
        </>
      )}
    </div>
  );
};

const CartItemComponent: FC<{ item: CartItem }> = ({ item }) => {
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
        <span className={`flex ${slide ? "ml-6" : ""} w-11/12 duration-500`}>
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

const MiniCart: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [subTotal, setSubTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cartContext = useContext(CartContext);
  const ws = useWindowSize();

  useEffect(() => {
    if (cartContext?.items) {
      let subTotal = 0;
      cartContext.items.forEach((item) => (subTotal += item.price));
      setSubTotal(subTotal);
      setTotalItems(cartContext.items.length);
    }
  }, [cartContext?.items, cartContext?.items?.length]);

  const displayCaret = (): string => {
    if (ws && ws.width && ws.breakpoints && cartContext && cartContext.items) {
      if (ws.width >= ws.breakpoints.xl && cartContext?.items?.length > 0) {
        return "caret";
      }
    }
    return "";
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <div
        className={`flex items-center gap-2 ml-3 cursor-pointer ${displayCaret()}`}
      >
        <CartIcon total={totalItems} />
        <div className="xl:flex hidden flex-col">
          <span className="text-xs text-gray-400">My Cart</span>
          <span className="text-base leading-none">${subTotal.toFixed(2)}</span>
        </div>
      </div>
      {open && cartContext && cartContext.items && (
        <div className="absolute bottom-100 right-0 h-96 w-80 p-3 shadow-lg z-10 bg-white">
          <div className="flex flex-col gap-3 overflow-y-scroll h-4/6">
            {cartContext.items.map((item) => {
              return <CartItemComponent item={item} key={keyGen()} />;
            })}
          </div>
          <div className="flex my-5 justify-between items-center">
            <div>
              <span className="text-gray-500 text-sm">Subtotal: </span>
              <span className="ml-1">
                <Price price={subTotal} />
              </span>
            </div>
            <button className="text-sm border rounded-md px-2 flex justify-center items-center gap-0 h-8 ">
              Expand Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </button>
          </div>
          <div className="w-full">
            <button className="bg-primary w-full rounded-md text-white py-2">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
