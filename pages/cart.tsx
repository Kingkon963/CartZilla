import * as React from "react";
import { FC, useState } from "react";
import type { NextPage } from "next";
import Image from "next/dist/client/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

const Cart: NextPage = () => {
  return (
    <Layout>
      <div className="bg-secondary text-white px-3 xl:px-container xxl:px-containerXXL py-5 lg:pt-10 flex flex-col gap-12 mb-96">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-2xl lg:text-3xl order-2 lg:order-1 mt-3 lg:mt-0 font-medium">
            Your Cart
          </h1>
          <Breadcrumb
            dark={true}
            links={[{ title: "Shop", url: "/shopcategories" }]}
            currentPage="Cart"
          />
        </div>
        <div className="w-8/12 flex justify-between items-center justify-self-end">
          <h1 className="font-medium text-lg">Products</h1>
          <button className="px-5 py-2 border rounded-md border-primary text-primary hover:bg-primary hover:text-white duration-300 text-xs">
            <ArrowBackIosIcon className="text-base" />
            Continue shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
