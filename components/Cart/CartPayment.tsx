import * as React from "react";
import { FC } from "react";
import Image from "next/dist/client/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RedeemIcon from "@mui/icons-material/Redeem";
import CardReactFormContainer from "card-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

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
            <div className="">
              <div id="card-wrapper" className="py-10"></div>
              <CardReactFormContainer
                // the id of the container element where you want to render the card element.
                // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
                container="card-wrapper" // required
                // an object contain the form inputs names.
                // every input must have a unique name prop.
                formInputsNames={{
                  number: "CCnumber", // optional — default "number"
                  expiry: "CCexpiry", // optional — default "expiry"
                  cvc: "CCcvc", // optional — default "cvc"
                  name: "CCname", // optional - default "name"
                }}
                // initial values to render in the card element
                // initialValues={{
                //   number: "4242424242424242", // optional — default •••• •••• •••• ••••
                //   cvc: "123", // optional — default •••
                //   expiry: "16/12", // optional — default ••/••
                //   name: "Random Name", // optional — default FULL NAME
                // }}
                // the class name attribute to add to the input field and the corresponding part of the card element,
                // when the input is valid/invalid.
                classes={{
                  valid: "valid-input", // optional — default 'jp-card-valid'
                  invalid: "invalid-input", // optional — default 'jp-card-invalid'
                }}
                // specify whether you want to format the form inputs or not
                formatting={true} // optional - default true
              >
                <form className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                  <input
                    className="primary-input"
                    placeholder="Full name"
                    type="text"
                    name="CCname"
                  />
                  <input
                    className="primary-input"
                    placeholder="Card number"
                    type="text"
                    name="CCnumber"
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      className="primary-input"
                      placeholder="MM/YY"
                      type="text"
                      name="CCexpiry"
                    />
                    <input
                      className="primary-input"
                      placeholder="CVC"
                      type="text"
                      name="CCcvc"
                    />
                  </div>
                  <input
                    className="primary-btn-outline"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </CardReactFormContainer>
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
            <span className="hover:text-primary duration-300 flex items-center gap-3">
              <FontAwesomeIcon icon={faPaypal} className="text-2xl ml-1" />
              <span className="font-medium">Pay with PayPal</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm text-gray-500 py-5">
            <p className="text-sm">
              <span className="font-medium">PayPal</span> - the safer, easier
              way to pay
            </p>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 my-5">
              <input
                className="primary-input flex-1"
                type="email"
                name="paypalEmail"
                id="paypalEmail"
                placeholder="E-mail"
              />
              <input
                className="primary-input flex-1"
                type="password"
                name="paypalPassword"
                id="paypalPassword"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <a
                className="hover:text-primary duration-300 cursor-pointer"
                href="#"
              >
                Forget password?
              </a>
              <button className="primary-btn px-5 py-3">Login</button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
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
            <span className="hover:text-primary duration-300 flex items-center gap-3">
              <RedeemIcon className="text-gray-500" />
              <span className="font-medium">Redeem Reward Points</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm text-gray-500 py-5">
            <p className="text-base">
              You currently have <span className="font-medium">384</span> Reward
              Points to spend.
            </p>
            <div className="mt-5 flex items-baseline gap-2 select-none">
              <input type="checkbox" name="useReward" id="useReward" />
              <label className="cursor-pointer" htmlFor="useReward">
                Use my Reward Points to pay for this order.
              </label>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const CartPayment: FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActiveStep }) => {
  const goPrevStep = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };
  const goNextStep = () => {
    setActiveStep((activeStep) => activeStep + 1);
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
        <button
          className="flex-1 bg-gray-200 hover:bg-gray-300 duration-300 rounded-md"
          onClick={() => goPrevStep()}
        >
          Back to Shipping
        </button>
        <button
          className="flex-1 primary-btn lg:py-3"
          onClick={() => goNextStep()}
        >
          Review your order
        </button>
      </div>
    </div>
  );
};

export default CartPayment;
