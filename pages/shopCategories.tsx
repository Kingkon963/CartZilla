import { FC } from "react";
import type { NextPage } from "next";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import { shopCategories, popularBrands } from "../data/shopCategories";
import keyGen from "../utils/genKey";
import { arrowRightCircle } from "../styles/utils/svgIcons";

const CategoryCard: FC<{ category: typeof shopCategories[0] }> = ({
  category,
}) => {
  return (
    <div className="w-80 xxl:w-96 rounded-lg text-gray-500 text-sm">
      <div className="relative w-full h-56">
        <Image
          src={category.imgURL}
          alt=""
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <div className="px-5 pt-3">
        <h1 className="font-semibold text-lg mb-2">{category.name}</h1>
        <div className="flex flex-col gap-2 h-40 text-sm">
          {category.subCats.slice(0, 6).map((subCat) => {
            return (
              <div
                className="flex justify-between cursor-pointer hover:text-primary duration-300"
                key={keyGen()}
              >
                <span className="flex gap-1 items-center">
                  <span>{arrowRightCircle}</span>
                  {subCat.name}
                </span>
                <span>{subCat.total}</span>
              </div>
            );
          })}
        </div>
        <div
          className={`text-sm ${
            category.subCats.length > 6 ? "visible" : "invisible"
          }`}
        >
          ...
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span>{arrowRightCircle}</span>
            <span>View All</span>
          </div>
          <span>{category.totalItems.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const PopularBrandCard: FC<{ brand: typeof popularBrands[0] }> = ({
  brand,
}) => {
  return (
    <Link href="#">
      <div className="w-32 lg:w-48 xl:w-72 h-32 shadow-lg flex justify-center items-center lg:p-16 cursor-pointer">
        <Image src={brand.imgUrl} width={300} height={160} alt={brand.name} />
      </div>
    </Link>
  );
};

const ShopCategories: NextPage = () => {
  return (
    <Layout>
      <div className="bg-lightBlue px-3 xl:px-container xxl:px-containerXXL flex flex-col lg:flex-row justify-between items-center py-10 lg:py-0">
        <h1 className="text-2xl lg:py-8 font-semibold order-2 lg:order-1 mt-3 lg:mt-0">
          Shop Categories
        </h1>
        <Breadcrumb />
      </div>
      <div className="px-3 xl:px-container xxl:px-containerXXL py-10 select-none">
        <div className="flex flex-wrap justify-center gap-10">
          {shopCategories.map((category) => {
            return <CategoryCard category={category} key={keyGen()} />;
          })}
        </div>
      </div>
      <div className="xxl:px-containerXXL mb-24">
        <h1 className="w-full text-center font-bold text-2xl text-gray-700 my-10">
          Popular Brands
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {popularBrands.map((brand) => {
            return <PopularBrandCard brand={brand} key={keyGen()} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ShopCategories;
