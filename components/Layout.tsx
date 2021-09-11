import React from "react";
import tailwind from "../tailwind.config";
import Appbar from "./Appbar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <Topbar />
      <Appbar />
      <Navbar />
    </div>
  );
};

export default Layout;
