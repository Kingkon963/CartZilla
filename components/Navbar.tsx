import React, { FC, useState } from "react";
import Image from "next/image";
import Departments from "../data/navbar";
import styles from "../styles/Navbar.module.scss";
import Price from "./Price";

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
      className="flex relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="w-64 h-10 text-sm border-b  last:border-b-0">
        <div className="flex items-center justify-center gap-2 h-10 hover:text-primary duration-300 caret-r cursor-pointer">
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      </div>
      {open && (
        <div className="absolute left-full flex">
          <div className="bg-white w-sidebar h-menu rounded-md rounded-r-none border-r p-4 shadow-md">
            <div className="flex flex-col flex-wrap gap-12 h-full">
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
          <div className="flex flex-col gap-2 justify-center items-center p-4 w-64 bg-white rounded-lg rounded-l-none shadow-md">
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
  const [open, setOpen] = useState(true);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex gap-2 caret items-center hover:text-primary duration-300 cursor-pointer">
        <span>{menuIcon}</span>
        <span>Departments</span>
      </div>

      {open && (
        <div className="absolute w-64 h-menu bg-white shadow-lg z-10 p-1 px-0 ">
          {Departments.map((item) => {
            return <DeptMenuItem item={item} key={item.name} />;
          })}
        </div>
      )}
    </div>
  );
};

const Navbar: FC = () => {
  return (
    <nav className="px-container border py-4">
      <DeptMenu />
    </nav>
  );
};

export default Navbar;
