import * as React from "react";
import { FC, useState } from "react";
import type { NextPage } from "next";
import Image from "next/dist/client/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import CartList from "../components/Cart/CartList";
import Price from "../components/Price";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from "@mui/material";

const AccordionCart: React.FC = () => {
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
            <span className="hover:text-primary duration-300 font-medium">
              Apply promo code
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="py-5">
            <input
              className="primary-input"
              type="text"
              placeholder="Promo code"
            />
            <button className="primary-btn-outline mt-5">
              Apply promo code
            </button>
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
            <span className="hover:text-primary duration-300 font-medium">
              Shipping estimates
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="p-3 flex flex-col gap-5">
            <select
              name="location"
              className="select-primary w-full"
              defaultValue="Choose your country"
            >
              <option value="Choose your country">Choose your country</option>
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
            </select>
            <select
              name="location"
              className="select-primary w-full"
              defaultValue="Choose your country"
            >
              <option value="Choose your country">Choose your city</option>
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
            </select>
            <input
              className="primary-input"
              type="text"
              placeholder="ZIP / Postal code"
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Cart: NextPage = () => {
  return (
    <Layout>
      <div className="bg-secondary text-white px-3 xl:px-container xxl:px-containerXXL py-5 lg:pt-10 flex flex-col gap-12">
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
        <div className="lg:w-8/12 flex justify-between items-center justify-self-end">
          <h1 className="font-medium text-lg">Products</h1>
          <button className="px-5 py-2 border rounded-md border-primary text-primary hover:bg-primary hover:text-white duration-300 text-xs">
            <ArrowBackIosIcon className="text-base" />
            Continue shopping
          </button>
        </div>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL mb-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-8/12">
            <CartList />
            <button className="border rounded-md w-full border-blue-300 text-blue-400 py-2 hover:bg-blue-400 hover:text-white duration-300">
              <AutorenewOutlinedIcon />
              <span>Update Cart</span>
            </button>
          </div>
          <div className="lg:w-4/12 lg:pl-10 lg:-mt-16">
            <div className="bg-white rounded-md shadow-lg py-7 px-10 flex-center flex-col gap-5">
              <h1 className="font-medium">Subtotal</h1>
              <Price price={265} size="2xl" noColor />
              <hr className="w-full" />
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="additionalComments"
                  className="flex items-center"
                >
                  <span className="text-xs bg-blue-400 text-white py-px px-2 rounded-sm mr-1">
                    Note
                  </span>
                  <span>Additional Comments</span>
                </label>
                <textarea
                  id="additionalComments"
                  className="primary-input"
                  rows={6}
                />
                <AccordionCart />
              </div>
              <button className="primary-btn w-full py-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
