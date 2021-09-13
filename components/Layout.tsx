import React, { FC, useState } from "react";
import tailwind from "../tailwind.config";
import Appbar from "./Appbar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex flex-col flex-wrap">
      <Topbar />
      <Appbar setNavOpen={setNavOpen} />
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {children}
    </div>
  );
};

export default Layout;
