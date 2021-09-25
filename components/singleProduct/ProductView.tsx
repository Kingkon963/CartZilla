import * as React from "react";
import Image from "next/dist/client/image";
import keyGen from "../../utils/genKey";
import Price from "../Price";
import ProductData from "../../data/ProductData";

const ProductView: React.FC = () => {
  const [selectedImg, setSelectedImg] = React.useState(0);
  return (
    <div className="flex gap-10 p-5">
      <div className="flex flex-col gap-2">
        {ProductData.thumbs.map((th, _indx) => {
          const isSelected = _indx === selectedImg;
          return (
            <div
              className={`relative w-20 border rounded-md cursor-pointer p-px opacity-70  hover:opacity-100 duration-300 ${
                isSelected ? "opacity-100 border-primary" : ""
              }`}
              key={keyGen()}
              onClick={() =>
                setTimeout(() => {
                  setSelectedImg(_indx);
                }, 100)
              }
            >
              <Image src={th.url} alt="" width={156} height={156} />
            </div>
          );
        })}
      </div>
      <div className="border w-6/12">
        <div className="relative w-full">
          <Image
            src={ProductData.images[selectedImg].url}
            alt=""
            width={764}
            height={905}
          />
        </div>
      </div>
      <div className="border flex-1 flex flex-col gap-3">
        <Price price={124.99} size="2xl" />
        {/* Color Picker */}
        <div>
          <h1 className="text-sm">
            Color: <span className="text-gray-500">Dark blue/Black</span>
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <button
              className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
              style={{ backgroundColor: "#F25540" }}
            ></button>
            <button
              className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
              style={{ backgroundColor: "#65805B" }}
            ></button>
            <button
              className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
              style={{ backgroundColor: "#F5F5F5" }}
            ></button>
            <button
              className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
              style={{ backgroundColor: "#333333" }}
            ></button>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="">
            <select name="quantity" className="w-20 select-primary">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>
                4
              </option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="bg-primary text-white flex-1 rounded-md shadow-lg">
            Add to Cart
          </button>
        </div>

        <div className="flex gap-5">
          <button className="bg-gray-200 text-gray-500 p-3 rounded-md flex-1">
            Add to Wishlist
          </button>
          <button className="bg-gray-200 text-gray-500 p-3 rounded-md flex-1">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
