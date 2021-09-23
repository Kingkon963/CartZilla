import * as React from "react";
import Image from "next/image";

const LimitedOffer: React.FC = () => {
  return (
    <div
      className="w-full h-full flex flex-col xl:flex-row rounded py-10"
      style={{ backgroundColor: "#EEF8FE" }}
    >
      <div className="w-full xl:w-2/6">
        <div className="flex flex-col h-full justify-center items-start pl-6 xl:pl-10">
          <div className="bg-primary text-white px-2 text-sm rounded my-7 xl:my-0 xl:mb-10">
            Limited Offer
          </div>
          <h1 className="font-thin text-2xl xl:text-3xl">All new</h1>
          <h1 className="font-bold text-3xl xl:text-4xl">Last Gen iPad Pro</h1>
          <h3 className="font-thin text-lg xl:text-xl tracking-wider">
            at discounted price. Hurry up!
          </h3>
          <span
            className="tracking-widest py-5 text-sm text-gray-500"
            style={{ letterSpacing: "1rem" }}
          >
            dhms
          </span>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            View Offers
          </button>
        </div>
      </div>
      <div className="w-full xl:w-4/6 flex items-center justify-end">
        <Image
          src="https://cartzilla.createx.studio/img/home/banners/offer.jpg"
          width="700"
          height="401"
          alt="offer"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default LimitedOffer;
