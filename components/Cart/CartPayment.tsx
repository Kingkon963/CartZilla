import * as React from "react";
import { FC, useState } from "react";
import Image from "next/dist/client/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import Price from "../../components/Price";
import MiniCartItemComponent from "../MiniCartItemComponent";
import keyGen from "../../utils/genKey";
import cartItems from "../../data/cartData";

const AccordionPayment: React.FC = () => {
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
            <span className="hover:text-primary duration-300 flex items-center gap-3">
              <CreditCardIcon className="text-gray-500" />
              <span className="font-medium">Pay with Credit Card</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm text-gray-500">
            <div className="flex items-center gap-1 w-full">
              <span>We accept following credit cards: </span>
              <Image
                alt="Credit cards"
                src="https://cartzilla.createx.studio/img/cards.png"
                width={200}
                height={28}
                layout="intrinsic"
              />
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
            <span className="hover:text-primary duration-300">
              Find in local store
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="p-3">
            <select
              name="location"
              className="select-primary w-full"
              defaultValue="Australia"
            >
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const CartPayment: FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (event) {
      setSelectedMethod(event.currentTarget.name);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap text-gray-600">
      <div className="lg:w-8/12 py-10">
        <h1 className="font-medium mb-5">Choose payment method</h1>
        <AccordionPayment />
      </div>
      <div className="lg:w-4/12 lg:pl-10 lg:-mt-16">
        <div className="bg-white rounded-md shadow-lg py-7 px-7 flex-center flex-col gap-5">
          <h1 className="font-medium">Order summary</h1>
          <div className="flex flex-col gap-3  w-full">
            {cartItems.map((item) => {
              return (
                <MiniCartItemComponent
                  item={item}
                  key={keyGen()}
                  hoverEffect={false}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-2 w-full border-b pb-5 text-sm text-gray-500">
            <span className=" flex justify-between">
              <span>Subtotal:</span>
              <Price price={265} noColor />
            </span>
            <span className=" flex justify-between">
              <span>Shipping:</span>
              {"_"}
            </span>
            <span className=" flex justify-between">
              <span>Taxes:</span>
              <Price price={9.5} noColor />
            </span>
            <span className=" flex justify-between">
              <span>Discount:</span>
              {"_"}
            </span>
          </div>
          <Price price={274.5} noColor size="3xl" />
          <input
            className="primary-input"
            type="text"
            placeholder="Promo code"
          />
          <button className="primary-btn-outline">Apply promo code</button>
        </div>
      </div>
      <div className="lg:w-8/12 flex gap-7 mt-10">
        <button className="flex-1 bg-gray-200 hover:bg-gray-300 duration-300 rounded-md">
          Back to Cart
        </button>
        <button className="flex-1 primary-btn lg:py-3">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CartPayment;
