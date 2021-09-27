import * as React from "react";
import Image from "next/dist/client/image";
import Price from "../Price";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import keyGen from "../../utils/genKey";
import { Specs } from "../../data/ProductData";

const TechSpecs: React.FC = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="flex flex-col lg:flex-row items-start gap-3 pb-5 border-b">
        <div className="w-24 h-24 relative">
          <Image
            src="https://cartzilla.createx.studio/img/shop/single/gallery/th05.jpg"
            alt=""
            layout="fill"
          />
        </div>
        <div className="self-stretch">
          <h1 className="font-semibold">Smartwatch Youth Edition</h1>
          <Price price={124.99} size="2xl" />
        </div>

        <div className="lg:ml-auto flex gap-3">
          <select name="quantity" className="w-20 select-primary">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>
              4
            </option>
            <option value="5">5</option>
          </select>
          <button className="bg-primary text-white flex-center gap-1 rounded-md shadow-lg hover:shadow-none px-7">
            <ShoppingCartOutlinedIcon />
            <span className="hidden lg:inline-block">Add to Cart</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 p-2 rounded-md flex-center gap-1">
            <FavoriteBorderOutlinedIcon />
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 p-2 rounded-md flex-center gap-1">
            <CompareArrowsOutlinedIcon />
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-wrap lg:h-vh-75 gap-x-32 gap-y-10 pt-7">
        {Specs.map((spec) => {
          return (
            <div className="max-w-md" key={keyGen()}>
              <h1 className="font-medium">{spec.heading}</h1>
              <div className=" flex flex-col flex-wrap text-sm">
                {spec.list.map((info) => {
                  return (
                    <div
                      className="flex justify-between border-b py-2"
                      key={keyGen()}
                    >
                      <span className="text-gray-400">{info.key}:</span>
                      <span>{info.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSpecs;
