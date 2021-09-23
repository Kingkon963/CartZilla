import * as React from "react";
import { FC, useState } from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import TabNav from "../components/singleProduct/TabNav";

const SingleProduct: NextPage = () => {
  return (
    <Layout>
      <div className="bg-secondary text-white px-3 xl:px-container xxl:px-containerXXL py-10 lg:pt-10 lg:pb-28">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-2">
          <h1 className="text-2xl lg:text-3xl order-2 lg:order-1 mt-3 lg:mt-0">
            Smartwatch Youth Edition
          </h1>
          <Breadcrumb
            dark={true}
            links={[{ title: "Shop", url: "/shopcategories" }]}
            currentPage="Product Page v.2"
          />
        </div>
        <span className="flex items-center justify-center lg:justify-start gap-2">
          <span className="text-yellow-400">*****</span>
          <span className="text-sm">74 Reviews</span>
        </span>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL -mt-16 mb-96">
        <div className="bg-white rounded-lg h-vh-50 shadow-lg p-1">
          <TabNav
            titles={["General Info", "Tech Specs", "Reviews"]}
            components={[]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
