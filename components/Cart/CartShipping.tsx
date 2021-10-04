import * as React from "react";
import { FC, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import Price from "../../components/Price";

import CartList from "./CartList";
import MiniCartItemComponent from "../MiniCartItemComponent";
import keyGen from "../../utils/genKey";
import cartItems from "../../data/cartData";

const CartShipping: FC = () => {
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
        <h1 className="font-medium mb-5">Choose shipping method</h1>
        <table className="w-full text-sm  align-top">
          <thead className="align-bottom border-t border-b h-12">
            <tr>
              <th className="align-middle"></th>
              <th className="align-middle text-left">Shipping method</th>
              <th className="align-middle text-left">Delivery time</th>
              <th className="align-middle text-left">Handling fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="courier"
                    name="courier"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "courier"}
                  />
                  <label className="form-check-label" htmlFor="courier"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">Courier</span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone), United States &amp; Canada
                </span>
              </td>
              <td className="align-middle">2 - 4 days</td>
              <td className="align-middle">$26.50</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="local"
                    name="local"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "local"}
                  />
                  <label className="form-check-label" htmlFor="local"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">Local Shipping</span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone), United States &amp; Canada
                </span>
              </td>
              <td className="align-middle">up to one week</td>
              <td className="align-middle">$10.00</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flat"
                    name="flat"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "flat"}
                  />
                  <label className="form-check-label" htmlFor="flat"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">Flat Rate</span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone)
                </span>
              </td>
              <td className="align-middle">5 - 7 days</td>
              <td className="align-middle">$33.85</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="ups"
                    name="ups"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "ups"}
                  />
                  <label className="form-check-label" htmlFor="ups"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">
                  UPS Ground Shipping
                </span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone)
                </span>
              </td>
              <td className="align-middle">4 - 6 days</td>
              <td className="align-middle">$18.00</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="pickup"
                    name="pickup"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "pickup"}
                  />
                  <label className="form-check-label" htmlFor="pickup"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">
                  Local Pickup from store
                </span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone)
                </span>
              </td>
              <td className="align-middle">—</td>
              <td className="align-middle">$0.00</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="locker"
                    name="locker"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "locker"}
                  />
                  <label className="form-check-label" htmlFor="locker"></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">
                  Pick Up at Cartzilla Locker
                </span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone), United States &amp; Canada
                </span>
              </td>
              <td className="align-middle">—</td>
              <td className="align-middle">$9.99</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="global-export"
                    name="global-export"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "global-export"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="global-export"
                  ></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">
                  Cartzilla Global Export
                </span>
                <br />
                <span className="text-gray-500 fs-sm">
                  All addresses (default zone), outside United States
                </span>
              </td>
              <td className="align-middle">3 - 4 days</td>
              <td className="align-middle">$25.00</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="same-day"
                    name="same-day"
                    onChange={(e) => handleChange(e)}
                    checked={selectedMethod === "same-day"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="same-day"
                  ></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">Same-Day Delivery</span>
                <br />
                <span className="text-gray-500">Only United States</span>
              </td>
              <td className="align-middle">—</td>
              <td className="align-middle">$34.00</td>
            </tr>
            <tr className="border-b h-20">
              <td>
                <div className="form-check mb-4 pl-2 w-10">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="international"
                    name="shipping-method"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="international"
                  ></label>
                </div>
              </td>
              <td className="align-middle">
                <span className="text-dark font-medium">
                  International Shipping
                </span>
                <br />
                <span className="text-gray-500">
                  All addresses (default zone)
                </span>
              </td>
              <td className="align-middle">up to 15 days</td>
              <td className="align-middle">$27.00</td>
            </tr>
          </tbody>
        </table>
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

export default CartShipping;
