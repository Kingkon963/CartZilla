import { FC, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Price from "../components/Price";
import useWindowSize from "../hooks/useWindowSize";
import TrendingProducts from "../data/trandingProducts";
import Product from "../interfaces/Product";
import { CartContext } from "../context/CartContext";
import { Rating } from "@mui/material";

interface ProductCardProps {
  product: Product;
  disableHoverEffect?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, disableHoverEffect }) => {
  const [open, setOpen] = useState(false);
  const cartContext = useContext(CartContext);
  const router = useRouter();
  const ws = useWindowSize();
  const handleHover = () => {
    if (ws && ws.width && ws.breakpoints) {
      if (ws.width >= ws.breakpoints.xl && !disableHoverEffect) {
        setOpen(!open);
      }
    }
  };
  return (
    <div
      className={`py-5 ${
        disableHoverEffect ? "" : "hover:shadow-2xl"
      } border-b last:border-b-0 xl:border-b-0 xl:relative ${
        open ? "z-20" : ""
      }`}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <div className="absolute z-10">
        {product.new && (
          <div className="ml-5 bg-blue-400 text-white text-sm rounded-md shadow-lg px-2 mb-1">
            New
          </div>
        )}
        {product.sale && (
          <div className="ml-5 bg-primary text-white text-sm rounded-md shadow-lg px-2">
            Sale
          </div>
        )}
      </div>
      <div className="absolute z-10 right-0 flex justify-center items-center gap-4 pr-5">
        {open && (
          <button className="text-xs flex gap-1 text-gray-500 hover:text-primary duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <span>Compare</span>
          </button>
        )}
        <button className="text-xs flex gap-1 text-gray-500 hover:text-primary duration-300">
          <div className="bg-gray-200 rounded-full w-7 h-7 flex justify-center items-center duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="hover:text-primary text-xs"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="cursor-pointer px-5 relative">
        <Image
          src={product.img}
          alt=""
          width="518"
          height="484"
          layout="intrinsic"
        />
      </div>
      <div className="pt-3 flex flex-col items-start xl:relative bg-white">
        <div className="text-xs text-gray-500 px-5">{product.cat}</div>
        <div
          className="hover:text-primary duration-300 cursor-pointer px-5"
          onClick={() => router.push("/singleproduct")}
        >
          {product.title}
        </div>
        <div className="flex justify-between items-center w-full mt-1 px-5">
          <div>
            {!product.out_of_stock && <Price price={product.price} />}
            {product.out_of_stock && (
              <span className="text-gray-500">Out of Stock</span>
            )}
          </div>
          {!product.out_of_stock && (
            <div>
              <Rating size="small" value={5} />
            </div>
          )}
        </div>
        {open && (
          <div className="self-stretch mt-2 hidden xl:block xl:absolute xl:top-full w-full px-5 bg-white shadow-2xl pb-1">
            {!product.out_of_stock && (
              <button
                className="bg-primary text-white w-full py-2 rounded-md text-sm"
                onClick={() => cartContext?.addProduct(product, 1)}
              >
                Add To Cart
              </button>
            )}
            {product.out_of_stock && (
              <button className="bg-gray-200 hover:bg-gray-300 duration-300 text-gray-600 hover:text-gray-500 w-full py-2 rounded-md text-sm">
                View Details
              </button>
            )}
            <button className="bg-white text-gray-400 hover:text-primary duration-300 w-full py-2 text-sm">
              Quick View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
