import * as React from "react";
import { FC, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import Price from "../../components/Price";

import CartList from "./CartList";

const CartShipping: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-8/12">
        <CartList />
        <button className="border rounded-md w-full border-blue-300 text-blue-400 py-2 hover:bg-blue-400 hover:text-white duration-300">
          <AutorenewOutlinedIcon />
          <span>Update Cart</span>
        </button>
      </div>
      <div className="lg:w-4/12 lg:pl-10 lg:-mt-16">
        <div className="bg-white rounded-md shadow-lg py-7 px-10 flex-center flex-col gap-5"></div>
      </div>
    </div>
  );
};

export default CartShipping;
