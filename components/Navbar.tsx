import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Departments from "../data/navbar";
import styles from "../styles/Navbar.module.scss";
import Price from "./Price";
import SearchBox from "./SearchBox";

type DeptMenuItemType = typeof Departments[0];

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

const DeptMenuItem: FC<{ item: DeptMenuItemType }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col xl:flex-row border-b last:border-b-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="w-64 h-10 text-sm ">
        <div className="flex items-center justify-start px-5 gap-1 h-10 hover:text-primary duration-300 caret xl:caret-r cursor-pointer">
          <span className="w-1/12 ">{item.icon}</span>
          <span className="w-10/12">{item.name}</span>
        </div>
      </div>
      {open && (
        <div className="xl:absolute top-full xl:top-0 xl:left-full flex">
          <div className="bg-gray-100 xl:bg-white w-sidebar xl:h-menu rounded-md rounded-r-none p-4 pl-10 shadow-md">
            <div className="flex flex-col flex-wrap gap-12 xl:h-full">
              {item.subcats.map((subcat) => {
                return (
                  <div className="flex flex-col gap-2 w-1/2" key={subcat.title}>
                    <h6 className="font-bold">{subcat.title}</h6>
                    {subcat.urls.map((url) => {
                      return (
                        <span key={url.label}>
                          <a
                            href={url.url}
                            className="hover:text-primary duration-300"
                          >
                            {url.label}
                          </a>
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-2 justify-center items-center p-4 w-64 bg-white rounded-lg rounded-l-none shadow-md">
            <div className="w-full">
              <Image
                src={item.starting_from.imgURL}
                alt="alt"
                width="340"
                height="232"
                layout="responsive"
              />
            </div>
            <span>
              Stating From <Price price={item.starting_from.price} />
            </span>
            <button className="bg-primary py-2 px-6 text-sm rounded-lg text-white caret-r flex items-center">
              See Offers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DeptMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex gap-1 xl:gap-2 caret items-center hover:text-primary duration-300 cursor-pointer py-3 xl:py-2 px-2 xl:px-0 bg-gray-100 xl:bg-white">
        <span>{menuIcon}</span>
        <span>Departments</span>
      </div>

      {open && (
        <div className="absolute w-full xl:w-64 xl:h-menu bg-gray-100 xl:bg-white shadow-lg z-10 p-1 px-0 ">
          {Departments.map((item) => {
            return <DeptMenuItem item={item} key={item.name} />;
          })}
        </div>
      )}
    </div>
  );
};

const Navbar: FC<{
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ navOpen }) => {
  return (
    <nav
      className={`px-2 xl:py-2 xl:px-container border duration-500 ${
        navOpen ? "flex flex-col h-auto" : "hidden h-0"
      } xl:flex xl:flex-row xl:h-auto gap-3 xl:gap-0`}
    >
      <div className="xl:hidden">
        <SearchBox />
      </div>
      <DeptMenu />
      {/* <div>asda</div> */}
    </nav>
  );
};

export default Navbar;
