import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import { Departments, Home, Shop } from "../data/navbar";
import styles from "../styles/Navbar.module.scss";
import Price from "./Price";
import SearchBox from "./SearchBox";
import genKey from "../utils/genKey";
import useWindowSize from "../hooks/useWindowSize";

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

const Vr: FC = () => {
  return (
    <hr className="w-7 bg-gray-300 self-center transform rotate-90 hidden xl:inline" />
  );
};

const DeptMenuItem: FC<{ item: DeptMenuItemType }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const ws = useWindowSize();

  return (
    <div
      className="flex flex-col xl:flex-row border-b last:border-b-0"
      onMouseEnter={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width > ws.breakpoints.xl) setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width > ws.breakpoints.xl) setOpen(false);
        }
      }}
    >
      <div className="w-64 h-10 text-sm ">
        <div
          className="flex items-center justify-start px-5 gap-1 h-10 hover:text-primary duration-300 caret xl:caret-r cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-1/12 ">{item.icon}</span>
          <span className="w-10/12">{item.name}</span>
        </div>
      </div>
      {open && (
        <div className="xl:absolute top-full xl:top-0 xl:left-full flex">
          <div className="bg-gray-100 xl:bg-white xl:w-sidebar xl:h-menu rounded-md rounded-r-none p-4 pl-10 xl:shadow-md">
            <div className="flex flex-col flex-wrap gap-12 xl:h-full">
              {item.subcats.map((subcat) => {
                return (
                  <div className="flex flex-col gap-2 xl:w-1/2" key={genKey()}>
                    <h6 className="font-bold">{subcat.title}</h6>
                    {subcat.urls.map((url) => {
                      return (
                        <span key={genKey()}>
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
  const ws = useWindowSize();
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width > ws.breakpoints.xl) setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width > ws.breakpoints.xl) setOpen(false);
        }
      }}
    >
      <div
        className="flex gap-1 xl:gap-2 caret items-center hover:text-primary duration-300 cursor-pointer py-3 xl:py-2 px-2 xl:px-0 bg-gray-100 xl:bg-white"
        onClick={() => {
          if (ws && ws.width && ws.breakpoints) {
            if (ws.width < ws.breakpoints.xl) setOpen(!open);
          }
        }}
      >
        <span>{menuIcon}</span>
        <span>Departments</span>
      </div>

      {open && (
        <div className="xl:absolute w-full xl:w-64 xl:h-menu bg-gray-100 xl:bg-white xl:shadow-lg z-10 p-1 px-0 ">
          {Departments.map((item) => {
            return <DeptMenuItem item={item} key={genKey()} />;
          })}
        </div>
      )}
    </div>
  );
};

const Menu: FC<{ title?: string; sideMenu?: boolean }> = ({
  children,
  title,
  sideMenu = false,
}) => {
  const [open, setOpen] = useState(false);
  const ws = useWindowSize();

  useEffect(() => {
    if (!title) setOpen(true);
  }, [title]);

  const wsLessThanXL = () => {
    if (ws && ws.width && ws.breakpoints) {
      return ws.width < ws.breakpoints.xl;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width >= ws.breakpoints.xl) setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (ws && ws.width && ws.breakpoints) {
          if (ws.width >= ws.breakpoints.xl) setOpen(false);
        }
      }}
    >
      {title && (
        <div
          className={`px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white rounded-md hover:text-primary duration-300 ${
            wsLessThanXL() ? "caret" : sideMenu ? "caret-r" : ""
          } `}
          onClick={() => {
            if (wsLessThanXL()) setOpen(!open);
          }}
        >
          {title}
        </div>
      )}
      {open && (
        <div
          className={`xl:absolute bg-white z-10 flex flex-col w-auto ${
            sideMenu ? "left-full top-0" : "top-full left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const HomeMenu: FC = () => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  return (
    <div>
      <Menu title="Home">
        <div className="xl:flex xl:flex-row xl:items-stretch xl:w-vw-50">
          <div className="xl:h-96 xl:shadow-md ">
            {Home.map((item) => {
              return (
                <div
                  className="xl:w-52 border-b last:border-b-0 py-2 px-4 cursor-pointer bg-gray-100 xl:bg-white"
                  key={genKey()}
                  onMouseEnter={() => setImgUrl(item.imgURL)}
                >
                  <div>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <h6 className="text-xs text-secondary">{item.subtitle}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden xl:flex xl:w-1/2">
            {imgUrl && (
              <div
                className="xl:shadow-md"
                onMouseLeave={() => setImgUrl(null)}
              >
                <div className="w-full h-full">
                  <Image
                    src={imgUrl}
                    alt=""
                    width="250px"
                    height="360px"
                    layout="fixed"
                    className="rounded-sm shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Menu>
    </div>
  );
};

const Navbar: FC<{
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ navOpen }) => {
  return (
    <nav
      className={`px-2 xl:py-2 xl:px-container duration-500 select-none xl:text-gray-700 ${
        navOpen ? "flex flex-col h-auto" : "hidden h-0"
      } xl:flex xl:flex-row xl:items-center xl:h-auto gap-3`}
    >
      <div className="xl:hidden">
        <SearchBox />
      </div>
      <DeptMenu />
      <Vr />
      <HomeMenu />
      <Menu title="Shop">
        <div
          className={`py-2 px-4 bg-gray-100 xl:bg-white xl:w-vw-35 xl:h-vh-50 xl:flex xl:flex-col xl:flex-wrap xl:shadow-md`}
        >
          {Shop.map((item) => {
            return (
              <div className="mb-7 last:mb-0" key={genKey()}>
                <h6 className="font-semibold mb-3 xl:text-sm">{item.title}</h6>
                <div className="flex flex-col gap-2">
                  {item.urls.map((url) => {
                    return (
                      <span
                        className="xl:text-sm hover:text-primary duration-300"
                        key={genKey()}
                      >
                        <a href={url.url}>{url.label}</a>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Menu>

      <Menu title="Account">
        <div
          className={`p-2 px-0 bg-gray-100  xl:bg-white xl:flex xl:flex-wrap xl:shadow-md xl:text-sm gap-2 rounded-md`}
        >
          <div className="xl:w-42">
            <Menu title="Shop User Account" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Order History</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Profile Settings</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Account Addresses</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Payment Methods</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Wishlist</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">My Tickets</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Single Ticket</a>
                </span>
              </div>
            </Menu>
          </div>
          <div className="xl:w-42">
            <Menu title="Vendor Dashboard" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Order History</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Profile Settings</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Account Addresses</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Payment Methods</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Wishlist</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">My Tickets</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Single Ticket</a>
                </span>
              </div>
            </Menu>
          </div>

          <div className="xl:w-42 px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white">
            <span className=" hover:text-primary duration-300">
              <a href="#">Sign In / Sign Up</a>
            </span>
          </div>
          <div className="xl:w-42 px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white">
            <span className=" hover:text-primary duration-300">
              <a href="#">Password Recovery</a>
            </span>
          </div>
        </div>
      </Menu>

      <Menu title="Pages">
        <div
          className={`p-2 px-0 bg-gray-100  xl:bg-white xl:flex xl:flex-wrap xl:shadow-md xl:text-sm gap-2 rounded-md`}
        >
          <div className="xl:w-42">
            <Menu title="Navbar Variants" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Order History</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Profile Settings</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Account Addresses</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Payment Methods</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Wishlist</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">My Tickets</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Single Ticket</a>
                </span>
              </div>
            </Menu>
          </div>
          <hr className="bg-gray-300 w-full" />
          <div className="xl:w-42 px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white">
            <span className=" hover:text-primary duration-300">
              <a href="#">About Us</a>
            </span>
          </div>
          <div className="xl:w-42 px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white">
            <span className=" hover:text-primary duration-300">
              <a href="#">Contacts</a>
            </span>
          </div>
          <div className="xl:w-42">
            <Menu title="Help Center" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Order History</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Profile Settings</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Account Addresses</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Payment Methods</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Wishlist</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">My Tickets</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Single Ticket</a>
                </span>
              </div>
            </Menu>
          </div>
          <div className="xl:w-42">
            <Menu title="404 Not Found" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Order History</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Profile Settings</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Account Addresses</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Payment Methods</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Wishlist</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">My Tickets</a>
                </span>
                <span className="xl:w-42 hover:text-primary duration-300">
                  <a href="#">Single Ticket</a>
                </span>
              </div>
            </Menu>
          </div>
          <hr className="bg-gray-300 w-full" />
          <div className="xl:w-42 px-4 py-3 xl:py-1 w-full cursor-pointer bg-gray-100 xl:bg-white">
            <span className=" hover:text-primary duration-300">
              <a href="#">Sticky Footer Demo</a>
            </span>
          </div>
        </div>
      </Menu>

      <Menu title="Blogs">
        <div
          className={`p-2 px-0 bg-gray-100  xl:bg-white xl:flex xl:flex-wrap xl:shadow-md xl:text-sm gap-2 rounded-md`}
        >
          <div className="xl:w-44">
            <Menu title="Blog List Layouts" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">List with Sidebar</a>
                </span>
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">List no Sidebar</a>
                </span>
              </div>
            </Menu>
          </div>
          <div className="xl:w-44">
            <Menu title="Blog Grid Layouts" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">Grid with Sidebar</a>
                </span>
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">Grid no Sidebar</a>
                </span>
              </div>
            </Menu>
          </div>
          <div className="xl:w-44">
            <Menu title="Single Post Layouts" sideMenu={true}>
              <div className="flex flex-col xl:shadow-lg pl-5 gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">Article with Sidebar</a>
                </span>
                <span className="xl:w-44 hover:text-primary duration-300">
                  <a href="#">Article no Sidebar</a>
                </span>
              </div>
            </Menu>
          </div>
        </div>
      </Menu>

      <Menu title="Docs / Components">
        <div
          className={`p-2 px-0 bg-gray-100  xl:bg-white xl:flex xl:flex-wrap xl:shadow-md xl:text-sm gap-2 rounded-md`}
        >
          <div className="xl:w-44">
            <Menu>
              <div className="flex flex-col xl:shadow-lg  gap-2 py-2 rounded-md bg-gray-100  xl:bg-white">
                <span className="xl:w-44 hover:text-primary duration-300 flex mx-2 py-1">
                  <div className="w-2/12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                      />
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <a
                      className="flex flex-col justify-center items-start"
                      href="#"
                    >
                      <span>Documentation</span>
                      <span className="text-xs">Kick-start customization</span>
                    </a>
                  </div>
                </span>
                <hr className="bg-gray-300 w-full" />
                <span className="xl:w-44 hover:text-primary duration-300 flex mx-2 py-1">
                  <div className="w-2/12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <a
                      className="flex flex-col justify-center items-start"
                      href="#"
                    >
                      <span>
                        Components{" "}
                        <span className="text-xs px-1 rounded-sm text-white bg-blue-400">
                          40+
                        </span>
                      </span>
                      <span className="text-xs">Faster page building</span>
                    </a>
                  </div>
                </span>
                <hr className="bg-gray-300 w-full" />
                <span className="xl:w-44 hover:text-primary duration-300 flex mx-2 py-1">
                  <div className="w-2/12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <a
                      className="flex flex-col justify-center items-start"
                      href="#"
                    >
                      <span>
                        Changelog{" "}
                        <span className="text-xs px-1 rounded-sm text-white bg-green-400">
                          v2.3.0
                        </span>
                      </span>
                      <span className="text-xs">Regular updates</span>
                    </a>
                  </div>
                </span>
                <hr className="bg-gray-300 w-full" />
                <span className="xl:w-44 hover:text-primary duration-300 flex mx-2 py-1">
                  <div className="w-2/12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <a
                      className="flex flex-col justify-center items-start"
                      href="#"
                    >
                      <span>Support</span>
                      <span className="text-xs">support@createx.studio</span>
                    </a>
                  </div>
                </span>
              </div>
            </Menu>
          </div>
        </div>
      </Menu>
    </nav>
  );
};

export default Navbar;
