import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { FC, useState } from "react";
import keyGen from "../../utils/genKey";

interface StepProps {
  label: JSX.Element;
  stepNo: number;
  completed?: boolean;
  handleClick?: () => void;
}

const Step: FC<StepProps> = ({ label, stepNo, completed, handleClick }) => {
  return (
    <div
      className="relative flex-1 select-none cursor-pointer"
      onClick={handleClick}
    >
      <hr
        className={`z-0 border-2 ${
          completed ? "border-primary" : "border-secondaryLight"
        }  absolute w-full top-1/2 transform -translate-y-1/2`}
      />
      <span
        className={`w-6 h-6 flex-center z-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ${
          completed ? "bg-primary" : "bg-secondaryLight"
        } rounded-full`}
      >
        {stepNo}
      </span>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-5 ">
        {label}
      </div>
    </div>
  );
};

interface CartStepperProps {
  labels: JSX.Element[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const CartStepper: FC<CartStepperProps> = ({
  labels,
  activeStep,
  setActiveStep,
}) => {
  const router = useRouter();

  const handleStepClick = (indx: number) => {
    if (indx === 0) router.push("/cart");
    if (indx > 0) {
      setActiveStep(indx);
    }
  };

  return (
    <div className="w-full flex-center h-20">
      {labels.map((label, _indx) => {
        return (
          <Step
            stepNo={_indx + 1}
            label={label}
            key={keyGen()}
            completed={_indx <= activeStep}
            handleClick={() => handleStepClick(_indx)}
          />
        );
      })}
    </div>
  );
};

export default CartStepper;
