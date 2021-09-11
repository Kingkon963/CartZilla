import React from "react";
import tailwind from "../tailwind.config";
import Appbar from "./Appbar";
import Topbar from "./Topbar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <Topbar />
      <Appbar />
    </div>
  );
};

export default Layout;
