import React, { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import MiniCart from "./MiniCart";

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

const Appbar: FC<{ setNavOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setNavOpen,
}) => {
  return (
    <div className="xl:px-container xxl:px-containerXXL shadow-2xl px-2 py-4 flex gap-0 xl:gap-3 items-stretch xl:justify-start justify-between xl:shadow-none select-none w-screen text-gray-500">
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
      <div className="w-vw-50 ml-3 xl:flex hidden">
        <SearchBox />
      </div>

      <div
        className="xl:hidden ml-auto px-3 flex justify-center items-center"
        onClick={() =>
          setNavOpen((prev) => {
            return !prev;
          })
        }
      >
        {menuIcon}
      </div>

      <div className="flex items-center gap-2 ml-3 xl:ml-auto px-2 cursor-pointer">
        <Link href="#">
          <>
            <span>{personIcon}</span>
            <div className="xl:flex hidden flex-col xl:w-24">
              <span className="text-xs text-gray-400">Hello, Sign in</span>
              <span className="text-base leading-none">My Account</span>
            </div>
          </>
        </Link>
      </div>

      <MiniCart />
    </div>
  );
};

export default Appbar;
