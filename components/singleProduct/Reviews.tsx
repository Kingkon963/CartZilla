import * as React from "react";
import Image from "next/dist/client/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Rating from "@mui/material/Rating";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LinearProgress from "@mui/material/LinearProgress";

import Price from "../Price";

const Reviews: React.FC = () => {
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
          <button className="bg-primary text-white flex-center gap-1 rounded-md shadow-lg hover:shadow-none duration-300 px-7">
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

      <div className="py-5 flex flex-col gap-5 lg:flex-row border-b">
        <div className="lg:w-4/12">
          <h1 className="text-2xl font-medium">74 Reviews</h1>

          <div className="flex items-center gap-2 py-5">
            <Rating value={4.1} precision={0.1} size="small" readOnly />
            <span>4.1 Overall rating</span>
          </div>

          <div className="text-gray-400 text-sm">
            <p>58 out of 74 (77%)</p>
            <p>Customers recommended this product</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <span className="flex-center text-gray-500">
                <span>5</span>
                <span className="-mt-1">
                  <StarOutlinedIcon sx={{ fontSize: "16px" }} />
                </span>
              </span>
              <div className="w-full mx-2">
                <LinearProgress
                  variant="determinate"
                  value={45}
                  sx={{
                    backgroundColor: "#F3F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#42D697",
                    },
                  }}
                />
              </div>
              <span className="text-gray-500">45</span>
            </div>
            <div className="flex items-center">
              <span className="flex-center text-gray-500">
                <span>4</span>
                <span className="-mt-1">
                  <StarOutlinedIcon sx={{ fontSize: "16px" }} />
                </span>
              </span>
              <div className="w-full mx-2">
                <LinearProgress
                  variant="determinate"
                  value={16}
                  sx={{
                    backgroundColor: "#F3F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#A7E453",
                    },
                  }}
                />
              </div>
              <span className="text-gray-500">16</span>
            </div>
            <div className="flex items-center">
              <span className="flex-center text-gray-500">
                <span>3</span>
                <span className="-mt-1">
                  <StarOutlinedIcon sx={{ fontSize: "16px" }} />
                </span>
              </span>
              <div className="w-full mx-2">
                <LinearProgress
                  variant="determinate"
                  value={9}
                  sx={{
                    backgroundColor: "#F3F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#FFDA75",
                    },
                  }}
                />
              </div>
              <span className="text-gray-500">9</span>
            </div>
            <div className="flex items-center">
              <span className="flex-center text-gray-500">
                <span>2</span>
                <span className="-mt-1">
                  <StarOutlinedIcon sx={{ fontSize: "16px" }} />
                </span>
              </span>
              <div className="w-full mx-2">
                <LinearProgress
                  variant="determinate"
                  value={4}
                  sx={{
                    backgroundColor: "#F3F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#FEA569",
                    },
                  }}
                />
              </div>
              <span className="text-gray-500">4</span>
            </div>
            <div className="flex items-center">
              <span className="flex-center text-gray-500">
                <span>1</span>
                <span className="-mt-1">
                  <StarOutlinedIcon sx={{ fontSize: "16px" }} />
                </span>
              </span>
              <div className="w-full mx-2">
                <LinearProgress
                  variant="determinate"
                  value={2}
                  sx={{
                    backgroundColor: "#F3F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#F34770",
                    },
                  }}
                />
              </div>
              <span className="text-gray-500">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
