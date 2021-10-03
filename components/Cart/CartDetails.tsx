import * as React from "react";
import { FC, useState } from "react";
import Image from "next/dist/client/image";
import EditIcon from "@mui/icons-material/Edit";

import Price from "../../components/Price";

const CartDetails: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-8/12">
        <div className="bg-lightBlue my-10 flex items-center rounded-md p-5">
          <div className="relative rounded-full flex-center ring-4">
            <Image
              alt=""
              src="https://cartzilla.createx.studio/img/shop/account/avatar.jpg"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="ml-5">
            <h1 className="font-medium text-base text-gray-600">
              Susan Gardner
            </h1>
            <p className="text-sm text-blue-700">s.gardner@example.com</p>
          </div>

          <button className="flex-center gap-2 bg-white shadow-lg hover:shadow-none duration-300 rounded-md text-gray-500 font-thin px-4 py-2 ml-auto">
            <EditIcon sx={{ fontSize: "1rem" }} />
            <span>Edit profile</span>
          </button>
        </div>
      </div>
      <div className="lg:w-4/12 lg:pl-10 lg:-mt-16">
        <div className="bg-white rounded-md shadow-lg py-7 px-10 flex-center flex-col gap-5">
          <h1 className="font-medium">Subtotal</h1>
          <Price price={265} size="2xl" noColor />
          <hr className="w-full" />
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="additionalComments" className="flex items-center">
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
          </div>
          <button className="primary-btn w-full py-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
