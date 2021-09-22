import type { NextPage } from "next";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import CategoryCard from "../components/shopCategories/CategoryCard";
import PopularBrandCard from "../components/shopCategories/PopularBrandCard";
import keyGen from "../utils/genKey";
import { shopCategories, popularBrands } from "../data/shopCategories";

const ShopCategories: NextPage = () => {
  return (
    <Layout>
      <div className="bg-lightBlue px-3 xl:px-container xxl:px-containerXXL flex flex-col lg:flex-row justify-between items-center py-10 lg:py-0">
        <h1 className="text-2xl lg:py-8 font-semibold order-2 lg:order-1 mt-3 lg:mt-0">
          Shop Categories
        </h1>
        <Breadcrumb
          links={[{ title: "Shop", url: "/shopcategories" }]}
          currentPage="Categories"
        />
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
