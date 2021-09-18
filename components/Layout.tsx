import React, { FC, useEffect, useState } from "react";
import tailwind from "../tailwind.config";
import Appbar from "./Appbar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import useWindowSize from "../hooks/useWindowSize";

const BottomNavbar = () => {
  return (
    <div className="w-screen h-14 sticky bottom-0 flex bg-white z-10 shadow-lg">
      <div className=" flex flex-col items-center justify-center w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        <span className="text-xs ">Wishlist</span>
      </div>
      <div className=" flex flex-col  border-l border-r items-center justify-center w-1/3">
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
        <span className="text-xs ">Menu</span>
      </div>
      <div className=" flex flex-col items-center justify-center  w-1/3">
        <span className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span className="bg-primary text-white text-xs px-2 absolute top-0 left-full rounded-l-lg rounded-r-lg">
            4
          </span>
        </span>
        <span className="text-xs ">Cart</span>
      </div>
    </div>
  );
};

const Layout: FC = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const ws = useWindowSize();

  useEffect(() => {
    if (ws && ws.width && ws.breakpoints) {
      if (ws.width < ws.breakpoints.md) setShowBottomNav(true);
      else setShowBottomNav(false);
    }
  }, [ws]);
  return (
    <div>
      <Topbar />
      <div className="sticky top-0 bg-white z-30">
        <Appbar setNavOpen={setNavOpen} />
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      {children}

      {showBottomNav && <BottomNavbar />}
    </div>
  );
};

export default Layout;
