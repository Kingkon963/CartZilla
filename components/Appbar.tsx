import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className="text-lg"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
);

const personIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
);

const cartItems = [
  {
    name: "Bluetooth Headphones",
    price: 259.0,
    quantity: 2,
    picture: "https://cartzilla.createx.studio/img/shop/cart/widget/05.jpg",
  },
  {
    name: "Cloud Security Camera",
    price: 259.0,
    quantity: 2,
    picture: "https://cartzilla.createx.studio/img/shop/cart/widget/06.jpg",
  },
  {
    name: "Android Smartphone",
    price: 259.0,
    quantity: 2,
    picture: "https://cartzilla.createx.studio/img/shop/cart/widget/07.jpg",
  },
  {
    name: "Android Smart TV",
    price: 259,
    quantity: 2,
    picture: "https://cartzilla.createx.studio/img/shop/cart/widget/08.jpg",
  },
];

const Price: FC<{ price: number }> = ({ price }) => {
  return (
    <>
      <span className="text-blue-500 text-sm">
        ${price}
        <span className="text-xs">
          {price
            .toFixed(2)
            .toString()
            .slice(price.toFixed(2).toString().length - 3)}
        </span>
      </span>
    </>
  );
};

const CartIcon: FC<{ badge: number }> = ({ badge }) => {
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
      <span className="absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 text-xs flex justify-center items-center">
        {badge}
      </span>
    </div>
  );
};

const CartItem: FC<{ item: typeof cartItems[0] }> = ({ item }) => {
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
              src={item.picture}
              width="64"
              height="64"
              alt="product"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col ml-1 w-9/12">
            <h6 className="cursor-pointer hover:text-primary duration-300">
              {item.name}
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

type CartItemType = typeof cartItems[0];

const Cart: FC<{ cartItems: CartItemType[] }> = ({ cartItems }) => {
  const [open, setOpen] = useState<boolean>(false);

  let subTotal = 0;
  cartItems.forEach((item) => (subTotal += item.price));
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <div className="flex items-center gap-2 ml-3 cursor-pointer caret">
        <CartIcon badge={cartItems.length} />
        <div className="xl:flex hidden flex-col">
          <span className="text-xs text-gray-400">My Cart</span>
          <span className="text-base leading-none">${subTotal.toFixed(2)}</span>
        </div>
      </div>
      {open && (
        <div className="absolute bottom-100 right-0 h-96 w-80 p-3 shadow-lg z-10 bg-white">
          <div className="flex flex-col gap-3 overflow-y-scroll h-4/6">
            {cartItems.map((item) => {
              return <CartItem item={item} key={item.name} />;
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

const SearchBox: FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [catfocused, setCatFocused] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-9/12 flex border border-1 rounded-l-lg ${
          focused ? "border-primary" : ""
        } ring-primary`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className="flex items-center justify-center rounded-lg rounded-r-none w-1/12">
          {searchIcon}
        </div>
        <input
          className="p-3 outline-none w-11/12"
          type="text"
          placeholder="Serch for products"
        />
      </div>
      <div
        className={`border ${
          catfocused ? "border-primary" : ""
        } outline-none flex items-center justify-center w-3/12`}
        onFocus={() => setCatFocused(true)}
        onBlur={() => setCatFocused(false)}
      >
        <select
          name="categories"
          className="w-full h-full focus:border-primary px-3 outline-none"
        >
          <option value="0">All Categories</option>
          <option value="0">Computers</option>
          <option value="0">Smartphones</option>
          <option value="0">Headphones</option>
        </select>
      </div>
    </>
  );
};

const Appbar: FC = () => {
  return (
    <div className="xl:px-container px-2 py-4 flex gap-0 xl:gap-3 items-stretch xl:justify-start justify-between shadow-sm xl:shadow-none select-none w-screen text-gray-500">
      <div className="w-36 self-center hidden xl:block">
        <Image
          src="/images/logo-dark.png"
          width="284"
          height="68"
          alt="logo"
          layout="responsive"
        />
      </div>
      <div className="w-20 xl:w-36 self-center xl:hidden ">
        <Image
          src="/images/logo-icon.png"
          width="148"
          height="68"
          alt="logo"
          layout="responsive"
        />
      </div>
      <div className="w-3/5 ml-3 xl:flex hidden">
        <SearchBox />
      </div>

      <div className="xl:hidden ml-auto px-3 flex justify-center items-center">
        {menuIcon}
      </div>

      <div className="flex items-center gap-2 ml-3 px-2 cursor-pointer">
        <Link href="#">
          <>
            <span>{personIcon}</span>
            <div className="xl:flex hidden flex-col">
              <span className="text-xs text-gray-400">Hello, Sign in</span>
              <span className="text-base leading-none">My Account</span>
            </div>
          </>
        </Link>
      </div>

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Appbar;
