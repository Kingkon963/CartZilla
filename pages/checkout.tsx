import * as React from "react";
import { FC, useState } from "react";
import type { NextPage } from "next";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import CartList from "../components/Cart/CartList";
import CartStepper from "../components/Cart/CartStepper";
import StepperLabels from "../components/Cart/CartStepperLabels";
import CartDetails from "../components/Cart/CartDetails";
import CartShipping from "../components/Cart/CartShipping";
import CartPayment from "../components/Cart/CartPayment";
import "card-react/lib/card.css";
import CartReview from "../components/Cart/CartReview";

const Checkout: NextPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const CartContents = [CartDetails, CartShipping, CartPayment, CartReview];

  const Content = CartContents[activeStep - 1];
  return (
    <Layout>
      <div className="bg-secondary text-white px-3 xl:px-container xxl:px-containerXXL py-5 lg:pt-10 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-2xl lg:text-3xl order-2 lg:order-1 mt-3 lg:mt-0 font-medium">
            Checkout
          </h1>
          <Breadcrumb
            dark={true}
            links={[{ title: "Shop", url: "/shopcategories" }]}
            currentPage="Cart"
          />
        </div>
        <div className="lg:w-8/12">
          <CartStepper
            labels={StepperLabels}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>

      <div className="px-3 xl:px-container xxl:px-containerXXL mb-16">
        <Content setActiveStep={setActiveStep} />
      </div>
    </Layout>
  );
};

export default Checkout;
