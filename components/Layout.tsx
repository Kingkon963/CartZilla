import React from "react";
import tailwind from "../tailwind.config";
import Appbar from "./Appbar";
import Topbar from "./Topbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Appbar />
    </div>
  );
};

export default Layout;
