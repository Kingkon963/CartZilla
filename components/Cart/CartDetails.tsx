import * as React from "react";
import { FC, useState } from "react";
import Image from "next/dist/client/image";
import EditIcon from "@mui/icons-material/Edit";

import Price from "../../components/Price";

const CartDetails: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap">
      <div className="lg:w-8/12 text-gray-600 ">
        <div className="bg-lightBlue my-10 flex items-center gap-5 lg:gap-0 flex-col lg:flex-row rounded-md p-5">
          <div className="flex w-full">
            <div className="relative rounded-full flex-center ring-4 ">
              <Image
                alt=""
                src="https://cartzilla.createx.studio/img/shop/account/avatar.jpg"
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-2 py-px rounded-md">
                384
              </span>
            </div>
            <div className="ml-5">
              <h1 className="font-medium text-base text-gray-600">
                Susan Gardner
              </h1>
              <p className="text-sm text-blue-700">s.gardner@example.com</p>
            </div>
          </div>
          <button className="flex-center gap-2 bg-white shadow-lg hover:shadow-none duration-300 rounded-md text-gray-500 font-thin px-4 py-2 w-40 lg:ml-auto">
            <EditIcon sx={{ fontSize: "1rem" }} />
            <span>Edit profile</span>
          </button>
        </div>
        <div>
          <h1 className="font-medium">Shipping address</h1>
          <hr className="my-3" />
          <div className="grid lg:grid-cols-2 gap-x-7 gap-y-3 w-full mb-5">
            <div>
              <label className="font-medium text-sm" htmlFor="firstName">
                First Name
              </label>
              <input
                className="primary-input mt-1"
                type="text"
                id="firstName"
              />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="lastName">
                Last Name
              </label>
              <input className="primary-input mt-1" type="text" id="lastName" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="email">
                E-mail Address
              </label>
              <input className="primary-input mt-1" type="email" id="email" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input className="primary-input mt-1" type="tel" id="phone" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="company">
                Company
              </label>
              <input className="primary-input mt-1" type="text" id="company" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="country">
                Country
              </label>
              <select
                className="primary-input mt-1"
                name="country"
                id="country"
                defaultValue={0}
              >
                <option value={0}>Choose country</option>
                <option value={1}>Australia</option>
              </select>
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="city">
                City
              </label>
              <select
                className="primary-input mt-1"
                name="city"
                id="city"
                defaultValue={0}
              >
                <option value={0}>Choose city</option>
                <option value={1}>Australia</option>
              </select>
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="zip">
                Zip code
              </label>
              <input className="primary-input mt-1" type="text" id="zip" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="address1">
                Address 1
              </label>
              <input className="primary-input mt-1" type="text" id="address1" />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="address2">
                Address 2
              </label>
              <input className="primary-input mt-1" type="text" id="address2" />
            </div>
          </div>
          <h1 className="font-medium">Billing address</h1>
          <hr className="my-3" />
          <div>
            <input type="checkbox" name="sameAddress" id="sameAddress" />
            <label className="ml-2 font-thin select-none" htmlFor="sameAddress">
              Same as shipping address
            </label>
          </div>
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
      <div className="lg:w-8/12 flex gap-7 mt-10">
        <button className="flex-1 bg-gray-200 hover:bg-gray-300 duration-300 rounded-md">
          Back to Cart
        </button>
        <button className="flex-1 primary-btn lg:py-3">
          Proceed to Sipping
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
