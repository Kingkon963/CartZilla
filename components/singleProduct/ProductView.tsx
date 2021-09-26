import * as React from "react";
import Image from "next/dist/client/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import keyGen from "../../utils/genKey";
import Price from "../Price";
import ProductData from "../../data/ProductData";

const AccordionPrductView: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="border rounded-md">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        className="border-b-0 shadow-none"
        sx={{
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={
            <div className="bg-gray-200 rounded-full p-1">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div className="flex items-center gap-3">
            <LocalShippingOutlinedIcon className="text-gray-500" />
            <span className="hover:text-primary duration-300">
              Shipping options
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm">
            <div className="flex justify-between border-b py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>

            <div className="flex justify-between border-b py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>

            <div className="flex justify-between py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters
        sx={{
          boxShadow: "none",
          borderBottom: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <div className="bg-gray-200 rounded-full p-1">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div className="flex items-center gap-3">
            <LocationOnOutlinedIcon className="text-gray-500" />
            <span className="hover:text-primary duration-300">
              Find in local store
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="p-3">
            <select name="location" className="select-primary w-full">
              <option value="Spain">Spain</option>
              <option value="Australia" selected>
                Australia
              </option>
              <option value="UK">UK</option>
            </select>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

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
              onClick={() => setSelectedImg(_indx)}
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
      <div className=" flex-1 flex flex-col gap-10">
        <Price price={124.99} size="3xl" />
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
            <select
              name="quantity"
              className="w-20 select-primary border-primary"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>
                4
              </option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="bg-primary text-white flex-1 rounded-md shadow-lg hover:shadow-none">
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
        <div>
          <AccordionPrductView />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3 items-center text-sm">
          <span className="font-semibold text-gray-600">Share: </span>
          <button className="bg-blue-50 text-blue-400 flex gap-1 items-center px-2 py-1 rounded-md">
            <TwitterIcon className="text-lg" />
            Twitter
          </button>
          <button className="bg-purple-100 text-purple-500 flex gap-1 items-center px-2 py-1 rounded-md">
            <InstagramIcon className="text-lg" />
            Instagram
          </button>
          <button className="bg-blue-100 text-blue-500 flex gap-1 items-center px-2 py-1 rounded-md">
            <FacebookIcon className="text-lg" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
