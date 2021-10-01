import * as React from "react";
import { FC, useState } from "react";
import type { NextPage } from "next";
import Image from "next/dist/client/image";
import { Rating } from "@mui/material";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import TabNav from "../components/singleProduct/TabNav";
import ProductView from "../components/singleProduct/ProductView";
import TechSpecs from "../components/singleProduct/TechSpecs";
import Reviews from "../components/singleProduct/Reviews";
import SuggestionCarousel from "../components/singleProduct/SuggestionCarousel";
import CheaperCarousel from "../components/singleProduct/CheaperCarousel";

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
          <span>
            <Rating size="small" value={4} readOnly />
          </span>
          <span className="text-sm">74 Reviews</span>
        </span>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL -mt-8 lg:-mt-16">
        <div className="bg-white rounded-lg shadow-lg p-1">
          <TabNav
            titles={["General Info", "Tech Specs", "Reviews"]}
            components={[ProductView, TechSpecs, Reviews]}
          />
        </div>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL border-b py-16">
        <div className="px-5 lg:px-32 flex flex-col">
          <h1 className="text-gray-700 text-3xl font-medium">
            Choose your style
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <Image
            alt=""
            src="https://cartzilla.createx.studio/img/shop/single/prod-img2.jpg"
            width={908}
            height={392}
          />
          <p className="py-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora.
          </p>
        </div>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL">
        <h1 className="w-full text-center text-gray-700 text-3xl font-medium py-10">
          You may also like
        </h1>
        <SuggestionCarousel />
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL mt-14 mb-16">
        <div className="border rounded-md ">
          <h1 className="w-full text-center text-gray-700 text-3xl font-medium py-10">
            Cheaper together
          </h1>
          <div>
            <CheaperCarousel />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
